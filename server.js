const doc = `
Usage:
  server.js [-p <port>] [--noclient]
`;
const { docopt } = require("docopt");
const args = docopt(doc, { version: "ssr0.2.0" });

const express = require("express");
const path = require("path");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { createStore } = require("redux");
const { ServerLocation, isRedirect } = require("@reach/router");
const axios = require("axios");

const {
  AppRoot,
  reducers,
  setSearchQuery,
  setSearchResults,
  setNextBatch,
  setNextBin,
  setNextSku,
  setNextUniq,
  setBinData,
} = require("./assets/server.bundle");

let port = 80;
let noclient = false;
if (args["-p"]) {
  port = parseInt(args["<port>"], 10);
  noclient = args["--noclient"];
}

// Remember to update [src/client/index.html] whenever you change this template
const htmlTemplate = (html, preloadedState) =>
  `<!DOCTYPE html>
<html>
<head>
    <title>Inventory App</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    <link rel="stylesheet" href="/assets/main.css" />
</head>
<body>
    <div id="react-root">${html}</div>
    <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
    </script>
    ${!noclient ? '<script src="/assets/client.bundle.js"></script>' : ""}
</body>
</html>`;

const express_app = express();

express_app.use('/assets', express.static(path.join(__dirname, "assets")));

const api_hostname = "http://localhost:8081";
const api_fetch = axios.create({ baseURL: api_hostname + "/api/" });

express_app.get("/*", (req, res, next) => {
  const store = createStore(reducers);
  req.locals = { store };

  Promise.all([
    api_fetch("/next/bin"),
    api_fetch("/next/sku"),
    api_fetch("/next/batch"),
  ]).then((res) => {
    req.locals.store.dispatch(setNextBin(res[0].data));
    req.locals.store.dispatch(setNextSku(res[1].data));
    req.locals.store.dispatch(setNextBatch(res[2].data));
    console.log("nexting");
    next();
  });
});

express_app.get("/search", (req, res, next) => {
  const searchQuery = req.query["query"];
  const page = parseInt(req.query.page) || 1;
  req.locals.store.dispatch(setSearchQuery(searchQuery));

  if (searchQuery) {
    api_fetch("/search", {
      params: { query: searchQuery, startingFrom: (page - 1) * 20 },
    })
      .then(({ data }) => {
        req.locals.store.dispatch(setSearchResults(data));
        next();
      })
      .catch(console.error);
  } else {
    next();
  }
});

express_app.get("/bin/:id", (req, res, next) => {
  api_fetch(`/bin/${req.params.id}`)
    .then(({ data }) => req.locals.store.dispatch(setBinData(data)))
    .then(next);
});

express_app.get("/*", (req, res) => {
  const app_root = React.createElement(
    ServerLocation,
    { url: req.url },
    React.createElement(AppRoot, {
      store: req.locals.store,
    })
  );
  const html_app = renderToString(app_root);
  const preloaded_state = req.locals.store.getState();

  const html_page = htmlTemplate(html_app, preloaded_state);
  res.send(html_page);
});

express_app.listen(port);
