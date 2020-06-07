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
const request = require("request");
const { ServerLocation } = require("@reach/router");

const {
  AppRoot,
  reducers,
  setQuery,
  setSearchResults,
  initialState,
} = require("./dist/server.bundle");

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

express_app.use(express.static(path.join(__dirname, "dist")));

const api_hostname = "http://localhost:8081";

const { Provider } = require("react-redux");

express_app.get("/*", (req, res, next) => {
  console.log("set store");
  const store = createStore(reducers);
  req.locals = { store };
  next();
});

express_app.get("/search", (req, res, next) => {
  const searchQuery = req.query["query"] || initialState.query;
  req.locals.store.dispatch(setQuery(searchQuery));

  request(
    {
      url: api_hostname + "/api/search",
      qs: { query: searchQuery },
      json: true,
    },
    (error, resp, data) => {
      console.log("response: " + resp);
      console.log("error: " + error);
      req.locals.store.dispatch(setSearchResults(data));
      next();
    }
  );
});

express_app.get("/bin/:id", (req, res, next) => {
  console.log(req);
  next();
});

express_app.get("/*", (req, res) => {
  const location = req.url;
  const context = {};
  const app_root = React.createElement(
    ServerLocation,
    { url: req.url },
    React.createElement(AppRoot, {
      store: req.locals.store,
      location,
      context,
    })
  );
  const html_app = renderToString(app_root);
  const preloaded_state = req.locals.store.getState();

  const html_page = htmlTemplate(html_app, preloaded_state);
  res.send(html_page);
});

express_app.listen(port);
