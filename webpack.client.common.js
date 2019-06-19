const merge = require("webpack-merge");
const parentCommon = require("./webpack.common.js");

const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(parentCommon, {
  entry: "./src/client/entry.jsx",
  output: {
    filename: "client.bundle.js",
    path: __dirname + "/dist/assets"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")()]
            }}
        ]
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/client/index.html",
        to: "index.html"
      }
    ])
  ]
});
