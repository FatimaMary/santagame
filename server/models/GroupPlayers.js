import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const { autoIncrementFactory } = autoIncrement;

const GroupPlayersSchema = new mongoose.Schema({
    playerId: {
        type: Number,
        unique: true,
        required: true,
    },
    invitationAccepted: {
        type: Boolean,
        required: true
    },
    playerName: {
        type: String,
        required: true
    },
    playerEmail: {
        type: String,
        required: true
    },
    groupId: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

GroupPlayersSchema.plugin(autoIncrement.plugin, {
    model: "GroupPlayer",
    field: "playerId",
    startAt: 1,
    incrementBy: 1,
});

const GroupPlayer = mongoose.model("groupPlayer", GroupPlayersSchema);

export default GroupPlayer;