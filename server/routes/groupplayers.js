import express from "express";
import { 
    postGroupPlayer, 
    getAllGroupPlayers,
    updateGroupPlayer,
    getAllPlayersById,
    getGroupsByEmail,
    getGroupsNameByEmail,
} from "../controllers/groupplayers.js";


const router = express.Router();

router.post("/add", postGroupPlayer);
router.get("/all", getAllGroupPlayers);
router.put("/update/:playerId", updateGroupPlayer);
router.get("/get/:groupId", getAllPlayersById);
router.get("/groups", getGroupsByEmail );
router.get("/groupname", getGroupsNameByEmail);

export default router;