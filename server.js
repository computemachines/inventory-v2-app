const express = require("express")
const React = require("react")
const { renderToString } = require("react-dom/server")

const App = require("./dist/server.bundle").default


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
express_app.get("/", (req, res) => {
  res.send(htmlTemplate(renderToString(App)))
})

express_app.listen(8080)
