// getting-started.js

const mongoose = require("mongoose");
const { Schema } = mongoose;

// Connect to MongoDB
main()
    .then(() => {
        console.log("connection successful");
        adduser();
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(
        "mongodb://127.0.0.1:27017/relationDemo"
    );
}

// Schema
const userSchema = new Schema({
    username: String,

    addresses: [
        {
            location: String,
            city: String,
        },
    ],
});

// Model
const User = mongoose.model("User", userSchema);

// Function to add user
const adduser = async () => {
    let user1 = new User({
        username: "sherlockholmes",

        addresses: [
            {
                location: "shahunagar jaysingpur",
                city: "kolhapur",
            },
        ],
    });

    // Add another address
    user1.addresses.push({
        _id: false,
        location: "p32 wallstreat",
        city: "London",
    });

    let result = await user1.save();

    console.log(result);
};