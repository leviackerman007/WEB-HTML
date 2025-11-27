export const allUsers=(req,res)=>{
    res.send("All users")
}
export const oneUser=(req,res)=>{
    res.send("One user")
}

export const createUser=async (req,res)=>{
    const {username,email,password}=req.body
    const user=await User.insertOne({
        username:username,
        email:email,
        password:password
    })
    res.send({message:"User created",user})
}

// async (req,res)=>{
//     const users=await User.find()
//     res.json(users)
// }

// async (req,res)=>{
//     const {id}=req.params
//     const user=await User.find({_id:id})
//     res.status(200).json(user)
// }