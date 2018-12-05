const express = require("express")
const React = require("react")
const { renderToString } = require("react-dom/server")
const {StaticRouter} = require("react-router-dom")
const {docopt} = require("docopt")


doc = `
Usage:
  server.js [-p <port>]
`
const args = docopt(doc, {version: "ssr0.1.0"})
console.log(args)

port = 80
if (args['-p']) {
  port = parseInt(args['<port>'])
}

const App = require("./dist/server.bundle").default

// Remember to update [src/client/index.html] whenever you change this template
const htmlTemplate = (html) =>
`<!DOCTYPE html>
<html>
<head>
    <title>test app</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
</head>
<body>
    <div id="react-root">${html}</div>
    <script src="/assets/client.bundle.js"></script>
</body>
</html>`

const express_app = express()

express_app.use(express.static("dist"))
express_app.get("/*", (req, res) => {
  const context = {}
  const app = React.createElement(StaticRouter,
                                  {location: req.url,
                                   context: context},
                                  App)
  res.send(htmlTemplate(renderToString(app)))
})

express_app.listen(port)
