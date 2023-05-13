import GroupPlayer from "../models/GroupPlayers.js";

export const postGroupPlayer = (req, res) => {
    const invitationAccepted = req.body.invitationAccepted;
    const playerName = req.body.playerName;
    const playerEmail = req.body.playerEmail;
    const groupName = req.body.groupName;
    const groupId = req.body.groupId;
    // const userId = req.body.userId;

    const newPlayer = new GroupPlayer({
        invitationAccepted,
        playerName,
        playerEmail,
        groupName,
        groupId,
        // userId
    });

    newPlayer
        .save()
        .then((player) => res.json(player))
        .catch((err) => res.status(400).json({ error: err.message }));
};

export const getAllGroupPlayers = (req, res) => {
    GroupPlayer.find()
        .then((players) => res.json(players))
        .catch((err) => res.status(400).json({ error: err.message }));
}

  
export const updateGroupPlayer = (req, res) => {
  const playerId = req.params.playerId;
  GroupPlayer.updateOne({ playerId: playerId }, { $set: {
    playerName: req.body.playerName,
    playerEmail: req.body.playerEmail
  }})
  .then((data) => res.json(data))
  .catch((err) => res.status(400).json({ error: err }));
}

  export const getAllPlayersById = (req, res) => {
    const groupId = req.params.groupId;
    GroupPlayer.find({ groupId: groupId })
    .then((player) => {
      if (!player) {
        res.status(404).json({ message: 'Players not found' });
      } else {
        res.json(player);
      }
    })
    .catch((err) => res.status(400).json({ message: err.message }));
  }

  
  export const getGroupsByEmail = (req, res) => {
    const email = req.body.email;
    GroupPlayer.find({ playerEmail: email })
      .then((player) => {
        if(!player) {
          res.status(404).json({ message: 'you are not in any group' });
        } else {
          res.json(player);
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  }

  // export const getGroupsByEmail = (req, res) => {
  //   const email = req.body.email;
  //   GroupPlayer.find({ playerEmail: email })
  //     .then((player) => {
  //       if (!player) {
  //         res.status(404).json({ message: 'you are not in any group' });
  //       } else {
  //         const groupName = player[0].groupName; 
  //         res.json(groupName);
  //       }
  //     })
  //     .catch((err) => res.status(400).json({ message: err.message }));
  // }