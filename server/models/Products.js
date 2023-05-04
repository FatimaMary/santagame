import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const { autoIncrementFactory } = autoIncrement;

const ProductsSchema = new mongoose.Schema({
    productId: {
        type: Number,
        unique: true,
        required: true,
    },
    productUrl: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
   productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    wishlistId: {
        type: Number,
        unique: true,
    },
});

ProductsSchema.plugin(autoIncrement.plugin, {
    model: "Product",
    field: "productId",
    startAt: 1,
    incrementBy: 1,
});

const Products = mongoose.model("Products", ProductsSchema);

export default Products; 