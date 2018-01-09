const express=require('express');
//新建一个路由对象
const Router= express.Router();

//设定一个get请求，url是相当于当前路由的主路径的
Router.get('/',(req,res)=>{
    res.status(200);      //设置响应成功的状态码是200
    res.set({
        'Content-Type':'text/html',      //mine
        'My-Name':'LPL'
    });

    /* res.end('Hello, Welcome to my site'); */
   /*  res.type('html'); */
    res.render('index');
})




//将这个路由对象导出
module.exports=Router;