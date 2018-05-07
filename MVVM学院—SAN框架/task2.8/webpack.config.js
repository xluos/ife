const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/main.js',
  },
  devtool: 'inline-source-map',
  devServer: {
         contentBase: './dist',
         port: 3000,
        //  hot: true
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
      {
        test: /\.svg$/,
        use: [
          // {loader: 'svg-inline-loader'},
          // {loader: 'file-loader'},
          {loader: 'url-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: {
          loader: "css-loader"
        }
      }
  ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: "./src/main.html"
    }),
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};