import { User } from "../models/user.model"

export const allUsers=async(req,res)=>{
    const {page=1,limit=10,country,sortBy="name",order="asc"}=req.query
    const filter={}
    if(country){
        filter.country=country
    }
    const sortOrder=order=="desc" ? -1 : 1
    const users=await User.find(filter).skip((page-1)*limit).limit(Number(limit)).sort({[sortBy]:sortOrder})
    res.json(users)
}
export const oneUser=(req,res)=>{
    res.send("One user")
}

export const createUser=async (req,res)=>{
    const {name,city,age,country}=req.body
    const user=await User.create({
        name:name,
        city:city,
        age:age,
        country:country
    })
    res.send({message:"User created",user})
}

export const getUser=async(req,res)=>{
    const city=req.query.city
    const name=req.query.name
    const age=req.query.age
    const country=req.query.country
    const users=await User.find({
        $or:[
        {name:name},
        {city:city},
        {age:age},
        {country:country}]
    })
    res.json(users)
}

export const getUserById=async(req,res)=>{
    const id=req.params.id
    const user=await User.findById(id)
    if(!user){
        return res.status(404)
.json({message:"User not found"})
    }
    res.json(user)
}

export const updateUserById=async(req,res)=>{
    const id=req.params.id
    const updates=req.body
    const updateduser=await User.findByIdAndUpdate(
        id,
        {$set:updates},
        {new:true,runValidators:true}
    )
    if(!updateduser){
        return res.status(404).json({message:'User not found'})
    }
    res.json(updateduser);
}

export const deleteUserById=async(req,res)=>{
    const id=req.params.id
    const deletedUser=await User.findByIdAndDelete(id)
    if(!deletedUser){
        return res.status(404).json({message:'User not found'})
    }
    res.json(deletedUser)
}
    
