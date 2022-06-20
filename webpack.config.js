
const path =require('path')

const HWP=require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')
const EslintWebpackPluginq=require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { join } = require('path')
module.exports={
    // development 开发阶段,production 发布阶段
    mode:'development',
    entry:"./src/main.js",//入口
    output:{
        path:path.join(__dirname,'lib'),//路径
        filename:"index.js",//出口
        clean:true,
    },
    plugins:[
        new VueLoaderPlugin(),
        new HWP({
            template: path.join(__dirname, "public/index.html"),
        }),
        new EslintWebpackPluginq({
            context:join(__dirname,'src/')
        }),
        new MiniCssExtractPlugin()
    ],
    devServer:{
        port:30000,
        open:true
    },
    module:{
        rules:[
            // {
            //     test:/\.css$/i,
            //     use:["style-loader","css-loader"]
            // },
            {
                test:/\.less$/i,
                use:["style-loader","css-loader","less-loader"]
            },
            {
                test:/\.(png|gif|jpg)$/,
                type:"asset",
                parser:{
                    dataUrlCondition:{
                        maxSize:2*1024,
                    }
                },
                generator:{
                    filename:'images/[hash:6][ext]'
                }
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)$/,
                type:'asset/resource',
                generator:{
                    filename:'fonts/[hash:6][ext]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },

}