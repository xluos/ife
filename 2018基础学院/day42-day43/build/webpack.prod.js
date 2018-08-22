const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  rules: {
      /*
      使用 babel 编译 ES6 / ES7 / ES8 为 ES5 代码
      使用正则表达式匹配后缀名为 .js 的文件
      */
      test: /\.js$/,

      // 排除 node_modules 目录下的文件，npm 安装的包不需要编译
      exclude: /node_modules/,

      /*
      use 指定该文件的 loader, 值可以是字符串或者数组。
      这里先使用 eslint-loader 处理，返回的结果交给 babel-loader 处理。loader 的处理顺序是从最后一个到第一个。
      eslint-loader 用来检查代码，如果有错误，编译的时候会报错。
      babel-loader 用来编译 js 文件。
      */
      use: [
        'babel-loader',
        // 'eslint-loader'
      ]
  }
});
