const express=require("express");
const app=express();
const date =require(__dirname+"/date.js")
var items=["buy food","cook food","eat food"];
var workItems=[];

const bodyparser= require("body-parser");
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use("*/css",express.static("public/css")) ;

app.get("/",function(req,res){

 var day=date.getday(); 


res.render('list', {listtitle: day,newListItems: items});
});
app.post("/",function(req,res){
  var item=req.body.newitem;
  items.push(item); 
  res.redirect("/"); 
});



app.listen(3000,function(){
console.log("server is running on port 3000");
})