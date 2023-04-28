import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: { 
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
});

const Users = mongoose.model("Users", userSchema);

export default Users;