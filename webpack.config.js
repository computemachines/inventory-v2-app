const webpack = require("webpack");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    client: ["@babel/polyfill", "react-hot-loader/patch", "./src/client/entry"],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    filename: "[name].bundle.js",
    path: `${__dirname}/dist/assets`,
  },
  // devServer: { contentBase: "./dist/assets", publicPath: "/assets/" },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
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
