const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals"); // used to externalize node_modules/ from the server bundle
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const AutoPrefixer = require("autoprefixer");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  target: "node",
  externals: [
    nodeExternals({
      whitelist: ["normalize.css"], // node_module/../normalize.css is imported in App.jsx. This should be bundled, i.e. not external.
    }),
  ],
  entry: path.resolve(__dirname, "src/server/entry.jsx"),
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js",
    library: "app",
    libraryTarget: "commonjs2",
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
              plugins: [AutoPrefixer()],
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { importLoaders: 2 } },
          {
            loader: "postcss-loader",
            options: { ident: "postcss", plugins: [AutoPrefixer()] },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/main.css",
    }),
  ],
});
