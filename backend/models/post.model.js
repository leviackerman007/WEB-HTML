import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    Title:String,
    content:String,
    userId:{type:mongoose.Types.ObjectId,ref:"User"},
})

export const Post=mongoose.model("Post",postSchema)