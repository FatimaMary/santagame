import express from "express";
import { 
    postPlayGroup,
    getAllGroups,
    getGroupById,
    getDetailsByEmail,
 } from "../controllers/playgroup.js";

const router = express.Router();

router.post("/addgroup", postPlayGroup);
router.get("/all", getAllGroups);
router.get("/single/:groupId", getGroupById);
router.get("/details", getDetailsByEmail);

export default router;