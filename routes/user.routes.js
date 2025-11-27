import { Router } from "express";
import { allUsers,createUser,oneUser } from "../controllers/user.controller.js";

const router=Router()

router.get('/users',allUsers)
router.get('/users/:id',oneUser)
router.post("/create-user",createUser)

export default router;