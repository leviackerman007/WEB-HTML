import { Product } from "../models/product.model.js"

export const getAllProducts=async(req,res)=>{
    const products=await Product.find()
    if(products){
        return res.status(200).json(products)
    }
        return res.status(404).send({message:"No products found"})
}

export const getProductbyId=async(req,res)=>{
    const id=req.params.id
    const product=await Product.findById(id)
    if(product){
        return res.status(200).json(product)
    }
    return res.status(404).send({message:"Product not found"})
}

export const createProduct=async(req,res)=>{
    const {ProductName,Price,Category}=req.body
    const newProduct= await Product.insertOne({
        ProductName:ProductName,
        Price:Price,
        Category:Category
    })
    res.status(201).json({message:"Product created",product:newProduct})
}

export const getProductbyCategory=async(req,res)=>{
    const category=req.params.category
    const products=await Product.find({Category:category})
    if(products){
        return res.status(200).json(products)
    }
    return res.status(404).send({message:"No products found in this category"})
}