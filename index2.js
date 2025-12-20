import express from "express"
import productRoutes from "./routes/product.routes.js"
import userRoutes from "./routes/user.routes.js"
import postRoutes from "./routes/post.routes.js"
import { connectDB } from "./db/db.js";
connectDB()
const app = express();

app.use(express.json())
app.use("/api",productRoutes)
app.use("/api",userRoutes)
app.use("/api",postRoutes)


app.listen(4000,()=>{
    console.log("Server is running on 4000 >>>>>>")
})