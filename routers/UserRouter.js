
import express from 'express';
const router = express.Router();


import { createUser, getUser, getUsers } from "../controllers/UserController";
    
router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);

export default router