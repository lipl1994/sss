const express=require('express');
const Router=express.Router();

const data={
    "code":0,
    "msg":'',
    "data":[
        {"name":"周杰伦"},
        { "name": "邻居节" },
        { "name": "林俊杰" }
    ]
}

Router.get('/users',(req,res)=>{
    //res.json()    向客户端发送  json 格式的数据
    

    //设置发送的数据格式是json格式，这样浏览器才能正确解析
    res.set({
        "Content-Type":"application/json"
    });

    //res.type("application/json");//只能设置返回的文件mine
    res.json(data);
});


module.exports=Router;