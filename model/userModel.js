const mongoose = require('mongoose')
const { Schema } = mongoose
const userSchema=new Schema({
    name:String,
    email:String,
    phone:String,
    password:String
})

const userModel=mongoose.model("user",userSchema)

module.exports=userModel