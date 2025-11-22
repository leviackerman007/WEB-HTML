import {Router} from "express"
import {Product} from "../models/product.model.js"
import {User} from "../models/user.model.js"
import {createProduct,getAllProducts,getProductbyId,getProductbyCategory} from "../controllers/product.controller.js"
import { get } from "mongoose"
const router=Router()

router.get("/products",getAllProducts)

router.get("/products/:id",getProductbyId)

router.get("/products/:category",getProductbyCategory)

router.post("/products/insertone",createProduct)

export default router;