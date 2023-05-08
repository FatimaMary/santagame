import mongoose from "mongoose";
import { autoIncrement } from "mongoose-plugin-autoinc";

const FriendsSchema = new mongoose.Schema({
    friendId: {
        type: Number,
        unique: true,
        required: true,
    },
    friendName: {
        type: String,
        required: true,
    },
    groupId: {
        type: Int,
        required: true,
    },
    status: {
        type: String,
    },
});

FriendsSchema.plugin(autoIncrement.plugin, {
    model: "Friend",
    field: "friendId",
    startAt: 1,
    incrementBy: 1,
});

const FriendName = mongoose.model("Friend Name" , FriendsSchema);

export default FriendName;