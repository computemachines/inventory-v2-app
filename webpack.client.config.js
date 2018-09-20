const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/client/entry.js',
  output: {
    filename: 'client.bundle.js',
    path: __dirname + '/dist/assets'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/assets/',
    publicPath: '/assets/',
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:8081'
    },
  },
    module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
	loader: 'babel-loader',
	options: {
	  presets: ['@babel/preset-react']
	}
      },
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/client/index.html',
      to: 'index.html',
    }])
  ]
}
