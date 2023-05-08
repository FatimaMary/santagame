import FriendName from "../models/Friend";

export const postFriend = (req, res) => {
    const friendName = req.body.FriendName;
    const groupId = req.body.groupId;

    const newFriend = new FriendName({
        friendName,
        groupId
    });

    newFriend
        .save()
        .then((friend) => res.json(friend))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const getFriendsById = (req, res) => {
    FriendName.find()
        .then((friends) => res.json(friends))
        .catch((err) => res.status(400).json("Error: " + err));
};