import express from "express";
import { 
    postProduct,
    getProducts,
    deleteProduct
} from "../controllers/product.js";

const router = express.Router();
router.post("/add", postProduct);
router.get("/get" , getProducts);
router.delete("/delete/:productId", deleteProduct);

export default router;