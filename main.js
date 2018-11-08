//引入项	目所需的包
const express = require('express');
const myPro = require('./routes/myPro.js');
const bodyParser = require('body-parser');
//1.使用express构建web服务器
var app = express();
app.listen(3000,()=>{
	console.log('远程穿越服务已开启。。。')
});

//2.托管静态资源
app.use(express.static('./myPro'));

//配置body-parser
app.use(bodyParser.urlencoded({
  extended: false
}));

//3.使用路由器管理所有用户模块下的路由

//ajax测试案例路由挂载
app.use('/myPro',myPro);