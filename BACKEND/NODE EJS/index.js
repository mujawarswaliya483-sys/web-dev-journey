const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("Hello, World!");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    // res.render("rolldice.ejs",{diceVal: diceVal});
    res.render("rolldice.ejs",{diceVal});
});

// instagram ejs

app.get("/ig/:username/",(req,res)=>{
    // const followers = ["adam", "swaliya","shradha","sachin","saurabh"];
    // let {id} = req.params;
    // res.render("instagram.ejs",{id,followers});

    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs",{ data });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});