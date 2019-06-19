const merge = require("webpack-merge");
const common = require("./webpack.client.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./dist/assets/",
    publicPath: "/assets/",
    historyApiFallback: true,
    port: 8080,
    proxy: {
      "/api": "http://localhost:8081"
    }
  }
});
