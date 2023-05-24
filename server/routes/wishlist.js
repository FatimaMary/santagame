import express from "express";
import { postWishlist } from "../controllers/wishlist.js";

const router = express.Router();
router.post("/add", postWishlist);

export default router;