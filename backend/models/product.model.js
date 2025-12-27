import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    ProductName:String,
    Price:Number,
    Category:String,
})

export const Product=mongoose.model("Product",productSchema)