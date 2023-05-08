import express from 'express';
import { 
    postFriend,
    getFriendsById,
} from '../controllers/friend';

const router = express.Router();

router.post("/add", postFriend);
router.get("/getById", getFriendsById);

export default router