//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");



const app = express();


app.set('view engine', 'ejs');



app.get("/", function(req, res){
    var today = new Date();
    var currentDay =today.getDay();
    var day="";
    var exactDay="";

    if (currentDay===6|| currentDay===0) {
        day="Weekend";
    }
    else{
        day="Weekday";
    }
    switch (currentDay) {
        case 0:
            exactDay="Sunday";
          break;
        case 1:
            exactDay="Monday";
          break;
        case 2:
            exactDay="Tuesday";
          break;
          case 3:
            exactDay="Wednesday";
          break;
          case 4:
            exactDay="Thursday";
          break;
          case 5:
            exactDay="Friday";    
          break;
          case 6:
            exactDay="Saturday";  
          break;
        default:
          console.log("Error on dates");
      }
    console.log(day);
    res.render("list",{kindOfDay: day,todayDay: exactDay});
  
    
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
