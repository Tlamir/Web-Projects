const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const https =require("https");


const app = express(); 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
const { Http2ServerRequest } = require("http2");

app.set('port', process.env.port || 3000) 

app.get('/', (req, res, next) =>{
    res.sendFile(__dirname+"/signup.html");
})
app.post("/",function(req,res){
    const firstName=req.body.FName;
    const lastName=req.body.LName;
    const email=req.body.email;
    const data={
        members:[
            {
                email_address:email,
                status: "subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    };

    const server="5";
    const listId="YourLIsstId";
    const apiKey="YOUR API KEY";
    const jsonData=JSON.stringify(data);
    const url="https://us"+server+".api.mailchimp.com/3.0/lists/"+listId;
    const options ={
        method:"POST",
        auth:"yigit:"+apiKey

    }
    const request=https.request(url,options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })

    })
    request.write(jsonData);
    request.end();
});

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})