const mongoose = require("mongoose"); 
const { Schema } = mongoose; 
 
// Connect to MongoDB 
main() 
    .then(async () => { 
        console.log("connection successful"); 
        await addData(); 
        await mongoose.connection.close(); 
    }) 
    .catch(err => console.log(err)); 
 
async function main() { 
    await mongoose.connect( 
        "mongodb://127.0.0.1:27017/relationDemo" 
    ); 
} 
 
// User Schema 
const userSchema = new Schema({ 
    username: String, 
    email: String 
}); 
 
// Post Schema 
const postSchema = new Schema({ 
    content: String, 
    likes: Number, 
    user: { 
        type: Schema.Types.ObjectId, 
        ref: "User" 
    } 
}); 
 
// Models 
const User = mongoose.model("User", userSchema); 
const Post = mongoose.model("Post", postSchema); 
 
// Add Data 
const addData = async () => { 
 
    let user = await User.findOne({username: "rahulKumar"}); 
 
    let post2 = new Post({ 
        content: "bye bye!", 
        likes: 23, 
    }); 
 
    // Connect post with user 
    post2.user = user; 
 
    // Save both documents 
    await post2.save(); 
};