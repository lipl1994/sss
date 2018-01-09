/* console.log(123); */
const express=require('express');  //加载express 核心模块

const app=express()   //暴露出的对象

const hbs= require('hbs');
const path = require('path');

const bodyParser = require('body-parser');

/* app.set()    对app这个应用进行设置的方法
app.use()    、、可以让app 这个应用加载一些中间件的方法
 */

app.use(bodyParser.json());  //处理表单提交的json格式的数据

//处理application/x-www-form
app.use(bodyParser.urlencoded({extended:false}));


const index=require('./router/index.js');
const api = require('./router/api.js');
const test = require('./router/test.js');
const updata = require('./router/updata.js');

app.use('/',index);   //设置一个跟路径对应的路由文件
app.use('/api',api);
app.use('/test', test);
app.use('/updata', updata);


app.engine('html',hbs.__express);
app.set('view engine','html');
// __dirname 代表当前你写的这个js文件所在的目录的绝对路径
app.set('views', path.resolve(__dirname,'views123'));


//处理404错误

app.use((req,res,next)=>{
    res.status(404);
    res.send('404 not find!')

});

//处理500错误
app.use((err,req, res, next) => {
   console.log(err);
   res.status(500);
   res.send('Server error!');

})

//监听8080端口
app.listen(3000,(err)=>{
    if(err){
        return console.error(err);
    }
    console.log('Sever is running at pro 3000');
})