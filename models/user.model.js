import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:String,
    rollNumber:Number,
    class:String, 
});

export const User=mongoose.model('User',userSchema);
