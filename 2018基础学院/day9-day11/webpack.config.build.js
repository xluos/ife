const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
  ],
  module: {
     rules: [
       {
         test: /\.html$/,
         use: ["html-loader"]
       },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
                {  
                    loader: 'url-loader',  
                    options: {  
                        limit: '20480'
                    }  
                },
         ]
       }
     ]
   }
};