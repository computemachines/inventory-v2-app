const webpack = require("webpack");
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
    path: `${__dirname}/dist/assets`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
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
