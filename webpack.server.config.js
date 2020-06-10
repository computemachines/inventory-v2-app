const webpack = require("webpack");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const dev = process.env.NODE_ENV !== "production";

const nodeExternals = require("webpack-node-externals"); // used to externalize node_modules/ from the server bundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoPrefixer = require("autoprefixer");

module.exports = {
  mode: dev ? "development" : "production",
  target: "node",
  entry: {
    server: "./src/server/entry",
  },
  externals: nodeExternals({ whitelist: ["normalize.css"] }),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "[name].bundle.js",
    path: `${__dirname}/dist/assets`,
    library: "app",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
