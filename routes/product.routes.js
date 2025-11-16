import {Router} from "express"
import {User} from "../models/user.model.js"
const router=Router()

router.get("/products",async (req,res)=>{
    const users=await User.find()
    res.json(users)
})

router.get("/products/:id",async (req,res)=>{
    const {id}=req.params
    const user=await User.find({_id:id})
    res.status(200).json(user)
})

router.post("/products",async (req,res)=>{
    const user=await User.insertOne({
        name:"Test User",
        rollNumber:123,
        class:"10"
    })
    res.send(user)
})

router.post("/products/insertone",async(req,res)=>{
    const {name,rollNumber,className}=req.body
    const user=await User.insertOne({
        name:name,
        rollNumber:rollNumber,
        class:className
    })
    res.send({message:"User created",user})
})

export default router;