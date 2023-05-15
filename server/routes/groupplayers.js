import express from "express";
import { 
    postGroupPlayer, 
    getAllGroupPlayers,
    updateGroupPlayer,
    getAllPlayersById,
    getGroupsByEmail,
    getGroupsNameByEmail,
    getIdsByGroupname,
    getFullDetailsByEmail,
} from "../controllers/groupplayers.js";


const router = express.Router();

router.post("/add", postGroupPlayer);
router.get("/all", getAllGroupPlayers);
router.put("/update/:playerId", updateGroupPlayer);
router.get("/get/:groupId", getAllPlayersById);
router.get("/groups", getGroupsByEmail );
router.get("/email", getGroupsNameByEmail);
router.get("/groupname", getIdsByGroupname);
router.get("/details/:email", getFullDetailsByEmail)

export default router;