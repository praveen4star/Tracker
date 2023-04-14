const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

//// Mongoose Connection////////
mongoose.connect("mongodb://127.0.0.1:27017/hack_36")
.then(()=>{
    console.log("mongodb connected"); 
})
.catch(()=>{
    console.log("failed to connect");
})
///////////////////

//// Creating UserSchema 
const userSchema = mongoose.Schema({
    name: {type: String, required: true}, 
    email: {type: String, rquired: true, unique: true}, 
    password: {type: String, rquired: true} ,
}, {timeStamps: true})
///////////////////////

const collection = new mongoose.model("users", userSchema);   
module.exports = collection