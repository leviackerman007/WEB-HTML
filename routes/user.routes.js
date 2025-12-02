import { Router } from "express";
import { allUsers,createUser,deleteUserById,updateUserById,getUser,getUserById } from "../controllers/user.controller.js";

const router=Router()

router.get('/users',allUsers)
router.get('/users/search',getUser)
router.post("/users",createUser)
router.delete("/users/:id",deleteUserById)
router.put("/users/:id",updateUserById)
router.get("/users/:id",getUserById)

export default router;