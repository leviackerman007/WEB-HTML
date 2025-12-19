import { allPost } from "../controllers/post.controller.js";
import Router from "express"

const router=Router()

router.get("/allpost",allPost)

export default router;