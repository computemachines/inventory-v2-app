const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const common = require("./webpack.client.common.js");


module.exports = merge(common, {
  mode: "production",
  
  optimization: {
    minimizer: [new TerserPlugin()]
  }
});
