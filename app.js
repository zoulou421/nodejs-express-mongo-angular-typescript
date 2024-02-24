var http= require('http');
var url= require('url');

var queryString=require('querystring');

var httpServer =http.createServer(function (req,resp) {
   resp.writeHead(200,{'content-type':'text/html'});
   resp.end("<h1>Test node js with the server</h1>");
   console.log(url.parse(req.url).path);
   query=url.parse(req.url).query;
   console.log("query:"+query);
   params=queryString.parse(query);
   //console.log("-params-:"+params);
   console.log("--params[name]--:"+ params['name']);
});

const port= (process.env.PORT||'8899');
httpServer.listen(port,function () {
    console.log("Server start at :"+port);
})