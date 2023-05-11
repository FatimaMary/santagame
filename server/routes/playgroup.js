import express from "express";
import { 
    postPlayGroup,
    getAllGroups,
    getGroupById,
 } from "../controllers/playgroup.js";

const router = express.Router();

router.post("/addgroup", postPlayGroup);
router.get("/all", getAllGroups);
router.get("/single/:id", getGroupById);

export default router;