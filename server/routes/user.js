import express from "express";
import {
    postUser,
    getUser,
    getUserById,
    updateUser,
    getUserByEmail,
} from '../controllers/user.js';

const router = express.Router();

router.post("/add", postUser);
router.get("/all", getUser);
router.get("/:userId", getUserById);
router.put("/update/:name", updateUser);
router.get("/get/:email", getUserByEmail);

export default router;