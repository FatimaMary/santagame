import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const { autoIncrementFactory } = autoIncrement;

const WishlistSchema = new mongoose.Schema({
    wishlistId: {
        type: Number,
        unique: true,
        required: true,
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    playerId: {
        type: Number,
        required: true
    }
});

WishlistSchema.plugin(autoIncrement.plugin, {
    model: "wishlists",
    field: "wishlistId",
    startAt: 1,
    incrementBy: 1,
});

const Wishlists = mongoose.model("wishlists", WishlistSchema);

export default Wishlists; 