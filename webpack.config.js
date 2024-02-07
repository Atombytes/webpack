const path = require('path')    //node module path
//html-webpack-plugin使用 1导入插件 创建构造器
const HtmlPlugin = require('html-webpack-plugin')
//2实例化
let htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})
//构建打包时能够自动清理
//导入插件包构造器 解析
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//插件实例化
const cleanWebpackPlugin = new CleanWebpackPlugin()

module.exports={
    mode:'development',
    //可配置devtool:代码调试报错行数及源码、resolve alias:配置解析别名（如@标识src）
    entry: path.join(__dirname,'./src/index.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        static: "./",
        open:true,  //初次打包后 是否直接打开浏览器访问
        host:'127.0.0.1',   //实时打包使用的主机
        port:9999   //实时打包使用的端口
    },
    //3应用实例插件
    plugins: [htmlPlugin,cleanWebpackPlugin],
    //第三方模块文件
    module:{    
        rules:[ //匹配规则
            {test: /\.css$/,use:['style-loader','css-loader']},
            {test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            // {test: /\.(jpg|png|gif)/i,use:[{loader: 'url-loader',options:{limit:8192,outputPath: 'image'}}]},
            // {test: /\.(jpg|png|gif)/i,use:[{loader: 'file-loader',options:{outputPath: 'image'}}]},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i,type: "asset/resource",generator: {filename: "image/[name].[hash:6][ext]"},parser: {dataUrlCondition: {maxSize: 8192}}},
            {test: /\.(?:js|mjs|cjs)$/,exclude:/node_modules/,use:{loader: 'babel-loader',options:{presets:[['@babel/preset-env',{targets: "defaults"}]]}}}
        ]
    }
}