const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const AutoPrefixer = require("autoprefixer");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  target: "node",
  externals: [
    nodeExternals({
      whitelist: ["normalize.css"]
    })
  ],
  entry: path.resolve(__dirname, "src/server/entry.jsx"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js",
    library: "app",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [AutoPrefixer()]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [AutoPrefixer()]
            }
          },
          { loader: "less-loader" }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/main.css"
    })
  ]
});
