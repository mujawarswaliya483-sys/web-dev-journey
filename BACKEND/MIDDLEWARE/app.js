const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
// app.use((req,res)=>{
//     console.log("Hi,I am middleware");
//     res.send(" i am middleware");
// });

// logger
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

const checkToken = (req,res,next)=>{
    let { token } = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
}

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("Hi,I am route");
});

app.get("/random",(req,res)=>{
    res.send("this is a random Page");
})

app.get("/err",(req,res)=>{
    abcd=abcd;
});

// ACTIVTY

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is Forbidden");
})






app.use((err,req,res,next)=>{
    let {status, message} = err;
    res.status(status).send(message);
});

// app.use((err,req,res,next)=>{
//     console.log("-----error2-----");
//     next(err);
// });

// app.use((req,res)=>{
//     res.send(404).send("page not found!");
// });

app.listen(8080,()=>{
    console.log("server listining to port");
});