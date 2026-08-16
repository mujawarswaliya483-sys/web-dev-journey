const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection succesuful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, //the value of title will always available
    },
    author:{
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
        enum: ["Fiction","non-fiction"],
    },
});

const book = mongoose.model("book",bookSchema);
book.findByIdAndUpdate("6a8199e0510718f7ea70ff01",{price: -500})
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});
// let book1 = new book({
//     title: "Kishan chandra",
//     author:"Unknoown",
//     price: 100,
//     category:"fiction",
// });

// book1.save().then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// the above line is used to create a collection