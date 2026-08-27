const express = require("express");
const app = express();
const mongoose = require("mongoose");
const chat = require("./models/chat.js");
const path = require("path");
const ExpressError = require("./ExpressError.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended:true }));
const port = 8080;
main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Index Route get /chats =>show all chats
app.get("/chats",async(req,res)=>{
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});
// new route is not contains assynchronous work hence we can do 
// so we can throw error from here
app.get("/chats/new",(req,res)=>{
    throw new ExpressError(404,"Page not found");
res.render("new.ejs");
});

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

// CREATE ROUTE
app.post("/chats",(req,res)=>{
    let {from, to, mes}=req.body;
    let newChat = new chat({
        from:from,
        to:to,
        mes:mes,
        created_at:new Date()
    });
    newChat
    .save()
    .then((res)=>{
        console.log("chat was saved");

    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
});

// NEW - show route
// throwing error in asynchronous route-
app.get("/chats/:id",async(req,res,next)=>{
    let { id } = req.params;
    let chat = await chat.findById(id);
    if(!chat){
        throw new ExpressError(404,"Chat not Found");
    }
    res.render("edit.ejs",{ chat });
});

app.get("/chats/:id/edit", async(req,res)=>{
    let {id} = req.params;
    let chat =  await chat.findById(id);
    res.render("edit.ejs",{ chat });
});

app.get("/",(req,res)=>{
    res.send("root is working");
});
// Error Handling Middleware
app.use((err,req,res,next)=>{
    let {status=500,message="Some Error Occured"}=err;
    res.send(status).send(message);
});

app.listen(port,()=>{
    console.log("port is listening");
});