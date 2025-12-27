import {Router} from "express"
import {createProduct,getAllProducts,getProductbyId,getProductbyCategory} from "../controllers/product.controller.js"

const router=Router()

router.get("/products",getAllProducts)

router.get("/products/:id",getProductbyId)

router.get("/products/:category",getProductbyCategory)

router.post("/products/insertone",createProduct)

export default router;