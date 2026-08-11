const express = require("express");
const app = express();
const port = 8080;

app.set("view engine","ejs");
const path = require("path");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
    console.log("app is listening");
});

const apple = require("./apple");
const banana = require("./banana");
const mango = require("./mango");

let fruits=["apple","mango","banana"];
module.export =fruits;

app.get("/apple",(req,res)=>{
    res.send("apple route");
    res.render("apple.ejs");
});