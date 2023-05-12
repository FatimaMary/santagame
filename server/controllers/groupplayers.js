import GroupPlayer from "../models/GroupPlayers.js";

export const postGroupPlayer = (req, res) => {
    const invitationAccepted = req.body.invitationAccepted;
    const playerName = "";
    const playerEmail = "";
    const groupId = req.body.groupId;
    // const userId = req.body.userId;

    const newPlayer = new GroupPlayer({
        invitationAccepted,
        playerName,
        playerEmail,
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
  .then(() => res.json("Player Updated"))
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
