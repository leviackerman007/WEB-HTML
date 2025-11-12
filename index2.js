import express from "express"
import productRoutes from "./routes/product.routes.js"
const app = express();

app.use(express.json())
app.use("/api",productRoutes)

app.listen(4000,()=>{
    console.log("Server is running on 4000 >>>>>>")
})