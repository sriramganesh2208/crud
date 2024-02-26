const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/nodeexpressdb")
.then(()=>{
    console.log("db connected")
})

.catch(()=>{
    console.log("db is not connected")
})
 
const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    age: {
        type:Number,
        required:true
    }
})
 
const UserModel = mongoose.model("users", UserSchema)
 
module.exports = UserModel;