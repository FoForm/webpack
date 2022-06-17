
const path =require('path')

const HWP=require('html-webpack-plugin')
module.exports={
    // development 开发阶段,production 发布阶段
    mode:'development',
    entry:"./src/main.js",//入口
    output:{
        path:path.join(__dirname,'dist'),//路径
        filename:"bundle.js"//出口
    },
    plugins:[
        new HWP({
            template: path.join(__dirname, "public/index.html"),
        })
    ],
    devServer:{
        port:65535,
        open:true
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader","css-loader"]
            },
        ]
    }
}