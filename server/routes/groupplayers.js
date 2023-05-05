import express from "express";
import { 
    postGroupPlayer, 
    getAllGroupPlayers 
} from "../controllers/groupplayers.js";


const router = express.Router();

router.post("/add", postGroupPlayer);
router.get("/all", getAllGroupPlayers);


export default router;