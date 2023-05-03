import Users from "../models/User.js";
import mongoose from "mongoose";
const { objectId } = mongoose.Types;

export const postUser = (req, res) => {
    const userId = req.body.userId;
    console.log("userId: ", userId);
    const name = req.body.name;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new Users({
        userId,
        name,
        mobileNumber,
        email,
        password,
    });

    newUser
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const getUser = (req, res) => {
    Users.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const getUserById = (req, res) => {
    const userId = req.params.userId;
    Users.findOne({ userId })
        .then((user) => {
            if(!user) {
                return res.status(404).json("User not found");
            }
            res.json(user);
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

export const updateUser = (req, res) => {
    const userId = req.params.userId;
    Users.findOne({ userId })
        .then((user) => {
            user.password = req.body.password;

            profile
                .save()
                .then(() => res.json("User Updated"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
};