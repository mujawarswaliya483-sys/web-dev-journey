const express = require("express");
const app = express();
const mongoose = require("mongoose");
const chat = require("./models/chat.js");
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

const port = 8080;
main().then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let chat1 = new chat({
    from:"neha",
    to: "priya",
    message: "send me your exam sheets",
    created_at: new Date()
});

chat1.save()
.then((res)=>{
    console.log(res);
})

app.get("/",(req,res)=>{
    res.send("root is working");
});
app.listen(port,()=>{
    console.log("port is listening");
});