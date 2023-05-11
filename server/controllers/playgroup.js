import PlayGroup from "../models/PlayGroups.js";


export const postPlayGroup = (req, res) => {
    const organiserName = req.body.organiserName;
    const friendsName = req.body.friendsName;
    const groupName = req.body.groupName;
    const budget = req.body.budget;
    const organiserEmail = req.body.organiserEmail;
    const giftExchangeDate = req.body.giftExchangeDate;
    const createdBy = req.body.createdBy;

    const newPlayGroup = new PlayGroup({
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
    PlayGroup.find()
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
    PlayGroup.updateOne(
        { $push: { friendsName: req.body.friendsName }}
    )
};

export const getGroupById = (req, res) => {
    const groupId = req.params.groupId;
    PlayGroup.findOne({ groupId: {groupId} })
      .then((group) => {
        if (!group) {
          res.status(404).json({ message: 'Group not found' });
        } else {
          res.json(group);
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  };
  