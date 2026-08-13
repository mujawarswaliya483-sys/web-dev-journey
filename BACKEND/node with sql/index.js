
// let users = [];

// for (let i = 0; i <= 100; i++) {
//     users.push(getRandomUser()); 
// }

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";


const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path")
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "swaliya123",
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};    
   app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM user";

    connection.query(q, (err, result) => {
        if (err) {
            let count = result[0]["count(*)"];
            res.send("home.ejs",{count});
        }

        console.log(err);
        res.render("spme error in db");
    });
});

//show route
app.get("/user",(req,res)=>{
    let q = 'SELECT *FROM user';
     connection.query(q, (err, users) => {
        if (err) {
            // let count = result[0]["count(*)"];
            // res.send(result);
            res.render("showUsers.ejs",{users});
        }

        // console.log(result);
        res.render("some error in db");
    });
});

//Edit Route
app.get("/user/:id/edit",(req,res)=>{
    res.render("edit.ejs");
    let q = 'SELECT * FROM user WHERE id=${id}'
    console.log(id);
})
app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});