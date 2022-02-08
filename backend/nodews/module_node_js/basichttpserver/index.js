const http = require("http");

const port = 8000;

const fs = require("fs");
function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{"content-type":"text/html"})
   
    fs.readFile("__HTML,CSS,JAVASCRIPT.TODOAPP/todoapp.htm",function(err,data){
        if(err){
            console.log("error");
            return res.end("<h1>Error</h1>");
        }

        return res.end(data);
    })
  
  
    //  res.end("<h1>GOTCHA!</h1>");
}

const server =  http.createServer(requestHandler);

server.listen(port, function(err){
  if(err){
  console.log(err);
   return;  
}
  else
  {
      console.log("Server is up and running",port);
  }
});