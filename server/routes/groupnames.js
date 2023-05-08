import express from "express";
import { 
    postPlayGroup,
    postGroupWithId,
    getAllGroups,
 } from "../controllers/groupnames.js";

const router = express.Router();

router.post("/addgroup", postPlayGroup);
router.post("/addwithid", postGroupWithId);
router.get("/all", getAllGroups);


export default router;