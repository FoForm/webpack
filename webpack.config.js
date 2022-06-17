
const path =require('path')

const HWP=require('html-webpack-plugin')
module.exports={
    entry:"./src/main.js",//入口
    output:{
        path:path.join(__dirname,'dist'),//路径
        filename:"bundle.js"//出口
    },
    plugins:[
        new HWP({
            template: path.join(__dirname, "public/index.html"),
        })
    ]
}