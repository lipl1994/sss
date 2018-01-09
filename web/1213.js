const http=require('http');
const fs=require('fs');//文件读取模块
const path=require('path');//路径处理模块
const server = http.createServer((request,response)=>{
    //request        //请求对象
   // response       //响应对象

   let url=request.url;
   if(url==='/'){
       //url+='index.html';
      // __dirname+'/index.html';
      url= path.join(__dirname,'index.html');
     
   }else{
       url = path.join(__dirname, url);
   }

  /*  response.writeHead(200,{
       'X-prower-by':'NOdejs',
       'Content-Type':'text/pain'
   });
   response.end(url); */
   fs.readFile(url,(err,data)=>{
       if(err){
           console.error(err.message);
           return;
       }
       response.end(data);
   })
});

server.listen(2020,()=>{
    console.log('The server is running at port:2020.')
});