const merge = require("webpack-merge");
const common = require("./webpack.client.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",

  devServer: {
    contentBase: "./dist/assets/",
    publicPath: "/assets/",
    historyApiFallback: true,
    port: 8080,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  output: {
    // devtoolModuleFilenameTemplate: "file:///[absolute-resource-path]"
  },
});
