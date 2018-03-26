const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const nforce=require("nforce");


var app= express();
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

//connect to salesforce rest api using nforce
var org=nforce.createConncetion({
    clientId:"3MVG9uudbyLbNPZOEOw4DgOCjPWf4aRCnB6TjxRVOExjHRU.3VpuFnDQH7VJDrqZiJRDhDgT2bt1GjnslFmCD",
    clientSecret:"1067671233602989788",
    redirectUri:"http://localhost:3000",
    apiVersion:"",
    environment:"production",
    mode:"multi"

});

//Connect to the database
var server= app.listen(process.env.PORT || 8080,function(){
    var port=server.address().port;
    console.log("App now runnint on port",port);
});

app.get("/contacts",function(req,res){

    org.authenticate({ username:"jamal.a.dawson@swagtocollege.org", password:"Noswad123"})
    if(err){
        console.log("Error: "+ err.message);
    }else{
        console.log("Access Token: "+oauth.access_token);
        org.query({query:"select id, firstName, lastName from contact"})
    }
})