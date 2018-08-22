const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const path = require('path');
const config = require('config-lite')(__dirname);
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // 热模块替换
    hot: true,
    // 文件目录
    contentBase: path.join(__dirname, "dist"),
    // 服务端口
    port: config.port,
    // 代理设置
    proxy: config.Proxy
  },
  plugins: [
    // 热替换相关插件
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
});