const webpack = require("webpack");
const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const dev = process.env.NODE_ENV !== "production";

module.exports = {
  mode: dev ? "development" : "production",
  entry: {
    client: [
      dev && "@babel/polyfill",
      dev && "react-hot-loader/patch",
      "./src/client/entry",
    ].filter(Boolean),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/dist/assets"),
    publicPath: "/",
  },
  devServer: {
    proxy: {
      "/api": "http://localhost:8081",
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["react-hot-loader/babel"],
            },
          },
        ],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   {
    //     from: "src/client/index.html",
    //     to: "index.html",
    //   },
    // ]),
  ],
};
