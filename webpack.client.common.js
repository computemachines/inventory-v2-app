const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const AutoPrefixer = require("autoprefixer");

const parentCommon = require("./webpack.common.js");

module.exports = merge(parentCommon, {
  entry: "./src/client/entry.jsx",
  output: {
    filename: "client.bundle.js",
    path: `${__dirname}/dist/assets`,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [AutoPrefixer()],
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 2 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [AutoPrefixer()],
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/client/index.html",
        to: "index.html",
      },
    ]),
  ],
});
