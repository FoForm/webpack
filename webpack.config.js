
const path =require('path')
module.exports={
    entry:"./src/main.js",//入口
    output:{
        path:path.join(__dirname,'dist'),//路径
        filename:"bundle.js"//出口
    }
}