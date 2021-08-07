///jshint esversion:6
const express = require("express");
const app = express();

app.get("/",function(req,res){
   res.send("<h1>Hello world<h1>");
});
app.get("/contact",function(req,res){
    res.send("contact me at yigithanguvenn@gmail.com");
 });

 app.get("/about",function(req,res){
    res.send("23 year old dude");
 });

 app.get("/hobbies",function(req,res){
    res.send("f1 and ipad");
 });

app.listen(3000,function(){
    console.log("server started on port 3000");
});