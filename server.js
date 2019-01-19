doc = `
Usage:
  server.js [-p <port>]
`
const { docopt } = require("docopt")
const args = docopt(doc, {version: "ssr0.1.0"})

const express = require("express")
const React = require("react")
const { renderToString } = require("react-dom/server")
const { createStore } = require("redux")

const { AppRoot, reducers } = require("./dist/server.bundle")

console.log(args)

port = 80
if (args['-p']) {
  port = parseInt(args['<port>'])
}



// Remember to update [src/client/index.html] whenever you change this template
const htmlTemplate = (html, preloaded_state) =>
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
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloaded_state).replace(/</g, '\\u003c')}
    </script>
    <script src="/assets/client.bundle.js"></script>
</body>
</html>`

const express_app = express()

express_app.use(express.static("dist"))
if (port !== 80) {
  express_app.use('/assets', express.static('dist')) 
}

const {Provider} = require("react-redux")

express_app.get("/*", (req, res) => {
  const location = req.url
  const store = createStore(reducers)
  store.dispatch({type: 'INCREMENT'})
  const context = {}
  const app_root = React.createElement(
    AppRoot, {store, location, context})
  const html_app = renderToString(app_root)
  const preloaded_state = store.getState()
  
  const html_page = htmlTemplate(html_app, preloaded_state)
  res.send(html_page)
})

express_app.listen(port)
