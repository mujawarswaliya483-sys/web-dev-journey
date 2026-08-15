const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection succesuful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//  the above code is user to connect with mongodb
// the above part is very important

// to create schema we write the below part

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age : Number,
});

const User = mongoose.model("User",userSchema);

User.findById('6a8058ffa810e5353e24f464')
.then(res =>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

// INSERTING MANY
// const User = mongoose.model("User",userSchema);
// User.insertMany([
//     {name: "Tony", email:"tony@gmail.com", age: 50},
//     {name: "swaliya", email:"swaliya@gmail.com", age: 18},
//     {name: "stark", email:"stark@gmail.com", age: 20},
// ]).then((res)=>{
//     console.log("result");
// });

// INSERTING ONE

// const User = mongoose.model("User",userSchema);
// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age:48,
// });

// const user2 = new User({
//     name: "swaliya",
//     email: "swaliyamujawar483@gmail.com",
//     age:19,
// });

// user1.save();
// user2.save()// save is a asynchonous method
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });