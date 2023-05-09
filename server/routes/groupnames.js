import express from "express";
import { 
    postPlayGroup,
    getAllGroups,
 } from "../controllers/groupnames.js";

const router = express.Router();

router.post("/addgroup", postPlayGroup);
router.get("/all", getAllGroups);


export default router;