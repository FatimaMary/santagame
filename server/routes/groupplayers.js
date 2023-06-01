import express from "express";
import { 
    postGroupPlayer, 
    getAllGroupPlayers,
    updateGroupPlayer,
    getAllPlayersById,
    getIdsByGroupname,
    getFullDetailsByEmail,
    updateFriendsArray,
} from "../controllers/groupplayers.js";


const router = express.Router();

router.post("/add", postGroupPlayer);
router.get("/all", getAllGroupPlayers);
router.put("/update/:playerName/:groupId", updateGroupPlayer);
router.get("/get/:groupId", getAllPlayersById);
router.get("/groupname/:groupName", getIdsByGroupname);
router.get("/details/:email", getFullDetailsByEmail);
router.put("/array/:groupId", updateFriendsArray);

export default router;