var webpack=require('webpack');
var path = require('path'); //用相对路径，需要用到path模块

module.exports = {
    entry: {
        'main': path.resolve(__dirname,'./main.js'),
        'assets/js/about': path.resolve(__dirname,'./src/pages/about/main.js'),
        'assets/js/home': path.resolve(__dirname,'./src/pages/home/main.js'),
    },
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: '[name].bundle.js'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        inline: true,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin() //热部署插件
    ]

}