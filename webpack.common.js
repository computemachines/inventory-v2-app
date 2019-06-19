
module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react",
                      "@babel/preset-env"]
          }
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  }
};
