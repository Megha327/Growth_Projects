/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './client/index.html',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.html'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.html$/i,
        loader: 'html-loader',
      },{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(scss|css)$/i,
        exclude: /node_modules/,
        use:  [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader:  "sass-loader"}
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}