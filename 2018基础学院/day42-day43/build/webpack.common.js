const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('config-lite')(__dirname);

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),  //根目录
      verbose: true,        　　　　　　　　　　//开启在控制台输出信息
      dry: false        　　　　　　　　　　    //启用删除文件
    }
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: config.title,
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    /*
    配置各种类型文件的加载器，称之为 loader
    webpack 当遇到 import ... 时，会调用这里配置的 loader 对引用的文件进行编译
    */
    rules: [

      // {
      //   // 匹配 html 文件
      //   test: /\.html$/,
      //   /*
      //   使用 html-loader, 将 html 内容存为 js 字符串，比如当遇到
      //   import htmlString from './template.html';
      //   template.html 的文件内容会被转成一个 js 字符串，合并到 js 文件里。
      //   */
      //   use: 'html-loader'
      // },

      {
        // 匹配 css 文件
        test: /\.css$/,

        /*
        先使用 css-loader 处理，返回的结果交给 style-loader 处理。
        css-loader 将 css 内容存为 js 字符串，并且会把 background, @font-face 等引用的图片，
        字体文件交给指定的 loader 打包，类似上面的 html-loader, 用什么 loader 同样在 loaders 对象中定义，等会下面就会看到。
        */
        use: ['style-loader', 'css-loader']
      },

      {
        /*
        匹配各种格式的图片和字体文件
        上面 html-loader 会把 html 中 <img> 标签的图片解析出来，文件名匹配到这里的 test 的正则表达式，
        css-loader 引用的图片和字体同样会匹配到这里的 test 条件
        */
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,

        /*
        使用 url-loader, 它接受一个 limit 参数，单位为字节(byte)
  
        当文件体积小于 limit 时，url-loader 把文件转为 Data URI 的格式内联到引用的地方
        当文件大于 limit 时，url-loader 会调用 file-loader, 把文件储存到输出目录，并把引用的文件路径改写成输出后的路径
  
        比如 views/foo/index.html 中
        <img src="smallpic.png">
        会被编译成
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA...">
  
        而
        <img src="largepic.png">
        会被编译成
        <img src="/f78661bef717cf2cc2c2e5158f196384.png">
        */
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
};