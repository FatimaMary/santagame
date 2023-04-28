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
    }
});

GroupNamesSchema.plugin(autoIncrement.plugin, {
    model: "Groupname",
    field: "groupId",
    startAt: 1,
    incrementBy: 1,
});

const playgroups = mongoose.model("playgroups", GroupNamesSchema);

export default playgroups; 