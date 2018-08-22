const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: path.join(__dirname, './javascripts/app/index.js'),
    output: {
        path: path.join(__dirname, '../public/javascripts'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ["style-loader","css-loader","less-loader"]
            }
        ]
    },
    resolve: {
        alias: {    // 方便require时简写
            jquery: path.join(__dirname, './javascripts/lib/jquery.min.js'),
            module: path.join(__dirname, './javascripts/module'),
            less: path.join(__dirname, './less')
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            // 自动加载模块，不用到处 import 和 require
            $: "jquery"
        })
    ]
}