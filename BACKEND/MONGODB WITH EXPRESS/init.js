const mongoose = require("mongoose");
const chat = require("./models/chat.js");
main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/watsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


let allchats = [
    {
        from:"neha",
        to: "preeti",
        mes:"send me notes for the exam",
        created_at:new Date(),
    },
   
];
chat.insertMany(allchats);

