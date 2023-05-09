import express from "express";
import { 
    postGroupPlayer, 
    getAllGroupPlayers,
    updateGroupPlayer,
    getAllPlayersById,
} from "../controllers/groupplayers.js";


const router = express.Router();

router.post("/add", postGroupPlayer);
router.get("/all", getAllGroupPlayers);
router.put("/update/:id", updateGroupPlayer);
router.get("/get/:groupId", getAllGroupPlayers);

export default router;