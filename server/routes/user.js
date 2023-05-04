import express from "express";
import {
    postUser,
    getUser,
    getUserById,
    updateUser
} from '../controllers/user.js';

const router = express.Router();

router.post("/add", postUser);
router.get("/all", getUser);
router.get("/:userId", getUserById);
router.put("/:userId", updateUser);

export default router;