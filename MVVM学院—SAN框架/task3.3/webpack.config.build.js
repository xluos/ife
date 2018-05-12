const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  module: {
    rules: [
      {
          test: /\.html$/,
          use: {
              loader: "html-loader",
              options: {minimize: true}
          }
      },
      {
          test: /\.san$/,
          use: ['san-loader']
      },
  ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: "./src/main.html"
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};