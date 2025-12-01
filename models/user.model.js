import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:String,
    city:String,
    age:Number,
    country:String
})
export const User=mongoose.model('User',userSchema);
