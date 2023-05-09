import Groupname from "../models/Groupnames.js";


export const postPlayGroup = (req, res) => {
    const organiserName = req.body.organiserName;
    const friendsName = req.body.friendsName;
    const groupName = req.body.groupName;
    const budget = req.body.budget;
    const organiserEmail = req.body.organiserEmail;
    const giftExchangeDate = req.body.giftExchangeDate;
    const createdBy = req.body.createdBy;

    const newPlayGroup = new Groupname({
        organiserName,
        friendsName,
        groupName,
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
    Groupname.find()
        .then((groups) => res.json(groups))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const updatePlayGroup = (req, res) => {
    const groupId = req.params.groupId;
    // playgroups.updateOne({ groupId: groupId })
    //     .then((group) => {
    //         // group.friendsName = 
    //         { $push: { friendsName: } }
    //     })
    Groupname.updateOne(
        { $push: { friendsName: req.body.friendsName }}
    )
}