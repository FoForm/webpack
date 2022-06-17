import {tab} from './tab.js'
import { marquee} from './marquee.js'
tab()
marquee()
// 样式
import './style/index.css'
import './style/index.less'
// 图片
import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'
const gif =document.createElement('img')
const png =document.createElement('img')
gif.src=gifSrc
png.src=pngSrc
document.body.appendChild(gif)
document.body.appendChild(png)
// 字体图标
import './assets/fonts/iconfont.css'


