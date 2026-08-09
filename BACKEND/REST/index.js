const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require("uuid");

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id: uuidv4(),
        username : "apna college",
        content :"I love coding"
    },
    {
        id:  uuidv4(),
        username:"swaliyamujawar",
        content:" i am a coder",
    },
    {
        id:  uuidv4(),
        username:"shradhaakhapraa",
        content:" I am a teacher",
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/post",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({ id,username,content});
    res.send("post requests working");
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let{id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{ post });
});

app.patch("/posts/:id",(req,res)=>{
    res.send("patch request working");
})

app.listen(port, ()=>{
    console.log("listening port 8080");
});