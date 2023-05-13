import express from "express";
import { 
    postGroupPlayer, 
    getAllGroupPlayers,
    updateGroupPlayer,
    getAllPlayersById,
    getGroupsByEmail,
} from "../controllers/groupplayers.js";


const router = express.Router();

router.post("/add", postGroupPlayer);
router.get("/all", getAllGroupPlayers);
router.put("/update/:id", updateGroupPlayer);
router.get("/get/:id", getAllPlayersById);
router.get("/groups", getGroupsByEmail );

export default router;