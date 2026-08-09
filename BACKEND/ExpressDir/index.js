const express = require("express");
 const app = express();

// console.dir(app);

 let port = 8080;

 app.listen(port,()=>{
     console.log(`app is listening on port ${port}`);
 });

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     res.send("this is a basic responce");
// });

app.get("/",(req,res)=>{
    res.send("this is a basic responce");
});

// app.get("/orange",(req,res)=>{
//     res.send("hello this is orange route");
// });

// app.get("/apple",(req,res)=>{
//     res.send("hello this is apple route");
// });

 // app.get("*",(req,res)=>{
 //  res.send("this path does not exists");
 // });

// app.post("/",(req,res)=>{
//     res.send("this is a post request");
// });

app.get("/:username/:id",(req,res)=>{
    let {username,id}= req.params;
    let htmlstr = `<h1>Welcome to the page of @${username} with ID ${id}</h1>
    <p>hello ${username} your id is ${id}</p>
    <h1>this is your username:- @${username}${id}</h1>
    `;
    res.send(htmlstr);
});

app.get("/search",(req,res)=>{
// console.log(req.query);
if(!q){
 res.send("<h1>please provide a query</h1>");
}
let { q } = req.query;
res.send(`<h1>these are the search results for query: ${q}</h1>`);
});