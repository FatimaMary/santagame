import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const { autoIncrementFactory } = autoIncrement;

const GroupNamesSchema = new mongoose.Schema({
    groupId: {
        type: Number,
        unique: true,
        required: true,
    },
    organiserName: {
        type: String,
        required: true
    },
    friendsName: {
        type: Array,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    organiserEmail: {
        type: String,
        required: true
    },
    giftExchangeDate: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    friendsIdArray: {
        type: Array,
    }
});

GroupNamesSchema.plugin(autoIncrement.plugin, {
    model: "Play Group",
    field: "groupId",
    startAt: 1,
    incrementBy: 1,
});

const PlayGroup = mongoose.model("Play Group", GroupNamesSchema);

export default PlayGroup; 