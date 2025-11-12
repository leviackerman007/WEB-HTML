import {Router} from "express"

const router=Router()

router.get("/products",(req,res)=>{
    res.send("all products send")
})

router.get("/products/:id",(req,res)=>{
    res.send("one product send")
})

export default router;