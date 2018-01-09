const express = require('express');
const Router = express.Router();
const formidable = require('formidable');   //处理文件上传的模块
const fs=require('fs');  //对文件处理的模块
const path=require('path');


Router.get('/', (req, res) => {
    res.type('html');
    res.render('updata');
});


Router.post('/', (req, res) => {
    let form = new formidable.IncomingForm();   //新建表单处理对象

    form.encoding='utf-8';   //设置表单的编码格式为utf-8;

    form.uploadDir = path.resolve(__dirname, '..', 'files');  //设定上传文件的储存目录

    form.maxFiledsSize=300*1024*1024;  //设定上传文件的大小限制

    form.keepExtensions=true;  //设定是否显示扩展名

    form.parse(req);  //获取并处理 request 对象里的body信息

    form.on('fileBegin',(name,file)=>{
        console.log(name);
        console.log(`${file.name}这个文件可以上传了`)
    })
//进度事件
    form.on('progress',(received,expected)=>{
        console.log(`当前文件上传的进度：${received / expected*100}%`);
    });

    //某个文件上传完成时

    form.on('file', (name, file) => {
        console.log(`${file.name}这个文件上传完成了`);
    });

    form.on('end', () => {
        //重定向到'/updata' 这个路由对应的页面
        //303 状态码  代表重定向
        // res.redirect(303, '/')
        res.redirect(303, '/updata');
    });

    form.on('error', (err) => {
        console.log(err);
        res.send('error');
    })


});





module.exports = Router;