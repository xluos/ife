const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
             contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' //path.resolve(__dirname, 'src/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.san$/,
                use: 'san-loader'
            }
        ]
    }
};