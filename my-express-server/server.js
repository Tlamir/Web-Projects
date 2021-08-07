///jshint esversion:6
const express = require("express");
const app = express();

app.get("/",function(request,response){
   response.send("<h1>Hello world<h1>");
});

app.listen(3000,function(){
    console.log("server started on prt 3000");
});