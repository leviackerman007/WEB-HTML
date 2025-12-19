import {Post} from "../models/post.model.js"

export const allPost=async (req,res)=>{
    const allPost=await Post.find().populate("userId")
    if (allPost.length==0){
        return res.status(503).send("No posts available")
    }
    return res.status(200).json(allPost)
}

export const createPost=async(req,res)=>{
    const {title,content,userId}=req.body
    if(!title || !content || !userId){
        return res.status(400).send("All fields are required")
    }
    const newPost = await Post.insertOne({
        Title:title,
        content:content,
        userId:userId
    })
    return res.status(201).send({message:"Post created",post:newPost})
}