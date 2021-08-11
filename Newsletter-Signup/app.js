const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");


const app = express(); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');

app.set('port', process.env.port || 3000) 

app.get('/', (req, res, next) =>{
    res.sendFile(__dirname+"/signup.html");
})
app.post("/",function(req,res){
    var firstName=req.body.FName;
    var lastName=req.body.LName;
    var email=req.body.email;

})

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})