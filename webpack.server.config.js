const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')


module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/server/entry.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // path: _dirname + '/dist/assets',
    // publicPath: '/assets/',
    filename: 'server.bundle.js',
    library: 'app',
    libraryTarget: 'commonjs2'
  },
  // resolve: {
  //     extensions: ['.js'],
  //     alias: {
  //         components: path.resolve(__dirname, '..', 'src/components')
  //     }
  // },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    },{
      test: /\.css$/, // replace with extract-text. make separate css output
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, 'css-loader']
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'assets/main.css'
  })]
}
