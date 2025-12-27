import { allPost,createPost } from "../controllers/post.controller.js";
import Router from "express"

const router=Router()

router.get("/allPost",allPost)

router.post("/createPost",createPost)

export default router;