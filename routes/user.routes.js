import { Router } from "express";
import { allUsers,oneUser } from "../controllers/user.controller.js";

const router=Router()

router.get('/users',allUsers)
router.get('/users/:id',oneUser)


export default router;