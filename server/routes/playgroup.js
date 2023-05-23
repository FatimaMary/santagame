import express from "express";
import { 
    postPlayGroup,
    getAllGroups,
    getGroupById,
    getDetailsByEmail,
    getDrawnNames,
 } from "../controllers/playgroup.js";

const router = express.Router();

router.post("/addgroup", postPlayGroup);
router.get("/all", getAllGroups);
router.get("/single/:groupId", getGroupById);
router.get("/details", getDetailsByEmail);
router.get("/drawn/:groupId", getDrawnNames);

export default router;