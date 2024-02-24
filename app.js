/*var http= require('http');
var url= require('url');

var queryString=require('querystring');

var httpServer =http.createServer(function (req,resp) {
   resp.writeHead(200,{'content-type':'text/html'});
   resp.end("<h1>Test node js with the server</h1>");
   console.log(url.parse(req.url).path);
   query=url.parse(req.url).query;
   console.log("query:"+query);
   params=queryString.parse(query);
   console.log("--params[name]--:"+ params['name']);
});

const port= (process.env.PORT||'8899');
httpServer.listen(port,function () {
    console.log("Server start at :"+port);
})*/
var express=require('express');
const {json} = require("express");
const process = require("process");
var app=express();

app.get('/',(req, res)=>{
   res.setHeader("content-type","text/html");
   res.send("<h1>Hello Express js developper</h1>");
});

app.get('/books/:code',(req, res)=>{
   res.setHeader("content-type","application/json");
   var infos={
      name:"Bonevy BEBY",
      email:"bonevybeby@formationkilo.com",
      code:req.params.code
   }
   res.send(JSON.stringify(infos));
});

const port=(process.env.PORT||'8988');
app.listen(port,()=>{
   console.log("Server started at port: "+port);
});
