import playgroups from "../models/Groupnames";
import Users from "../models/User";
import mongoose from "mongoose";

export const postPlayGroup = (req, res) => {
    const organiserName = req.body.organiserName;
    const friendsName = req.body.friendsName;
    const budget = req.body.budget;
    const organiserEmail = req.body.organiserEmail;
    const giftExchangeDate = req.body.giftExchangeDate;
    const createdBy = req.body.createdBy;

    const newPlayGroup = new playgroups({
        organiserName,
        friendsName,
        budget,
        organiserEmail,
        giftExchangeDate,
        createdBy
    });

    newPlayGroup
        .save()
        .then((groups) => res.json(groups))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const getAllGroups = (req, res) => {
    playgroups.find()
        .then((groups) => res.json(groups))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const updatePlayGroup = (req, res) => {
    const groupId = req.params.groupId;
    playgroups.findOne({ groupId: groupId })
        .then((group) => {
            // group.friendsName = 
            // { $push: { <friendsName>: <value1>, ... } }
        })
}