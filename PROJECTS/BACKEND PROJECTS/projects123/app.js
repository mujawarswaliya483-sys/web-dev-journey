const express = require("express");
// imports the express package, which is a web application framework for Node.js.
//  It simplifies the process of building web applications and APIs by providing a set of features and tools.

const app = express();
const port =3000;

const path = require("path");
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));

// project 1
app.get("/",(req, res)=>{
    res.send("Hello Swaliya");

});

app.get("/about",(req,res)=>{
    res.send("This is about page");
});

app.get("/contact",(req,res)=>{
    res.send("this is contact page");
});

app.get("/services",(req,res)=>{
    res.send("this is services page");
});

app.get("/gallery",(req,res)=>{
    res.send("this is gallery page");
});

app.get("/login",(req,res)=>{
    res.send("this is login page");
});

// project 2
app.get("/user/:name",(req,res)=>{
    res.send("welcome" + " "+req.params.name);
    console.log(req.params.name);
    // req.params.name is object that stores all the url parameters..
});

app.get("/user/:name/:age",(req,res)=>{
    res.send("welcome" + " " + req.params.name + "your age is" + " " + req.params.age);
    console.log(req.params.name);
    console.log(req.params.age);
});

app.get("/product/:id",(req,res)=>{
    // res.send("product id is :" + " " + req.params.id);
    // console.log(req.params.id);

    res.send(`product id is : ${req.params.id}`);
});

// project 3

 app.get("/student",(req,res)=>{
     res.render('student',{
         name:'swaliya',
         marks:90,
         result:'pass'
     });
 });

app.listen(port,()=>{
    console.log("server is running on port 3000");
});