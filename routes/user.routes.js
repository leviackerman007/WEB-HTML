import { Router } from "express";
import { allUsers,createUser,oneUser,deleteUserById,updateUserById,getUser,getUserById } from "../controllers/user.controller.js";

const router=Router()

router.get('/users',allUsers)
router.get('/users/:id',oneUser)
router.post("/createUser",createUser)
router.delete("/deleteUser/:id",deleteUserById)
router.put("/updateUser/:id",updateUserById)
router.get("userById/:id",getUserById)
export default router;