import mongoose from "mongoose";
import dotenv, { configDotenv } from "dotenv";

configDotenv();

export const connectDB=async()=>{
    try{
        console.log(process.env.MONGODB_URI)
        const a = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection success...")
    }catch(err){
        console.log("Error in DB connection", err);
    }
}