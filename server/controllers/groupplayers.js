import GroupPlayer from "../models/GroupPlayers.js";

export const postGroupPlayer = (req, res) => {
    const invitationAccepted = req.body.invitationAccepted;
    // const playerName = req.body.playerName;
    // const playerEmail = req.body.playerEmail;
    // const groupId = req.body.groupId;
    // const userId = req.body.userId;

    const newPlayer = new GroupPlayer({
        invitationAccepted,
        // playerName,
        // playerEmail,
        // groupId,
        // userId
    });

    newPlayer
        .save()
        .then((player) => res.json(player))
        .catch((err) => res.status(400).json("Error: " + err));
};

export const getAllGroupPlayers = (req, res) => {
    GroupPlayer.findOne()
        .then((players) => res.json(players))
        .catch((err) => res.status(400).json("Error: ", err));
}

export const updateGroupPlayer = (req, res) => {
    const playerId = req.params.playerId;
        GroupPlayer.findOne({ playerId })
            .then((player) => {
                player.playerName = req.body.playerName;
                player.playerEmail = req.body.playerEmail;
                player
                    .save()
                    .then((data) => res.json(data))
                    .catch((err) => res.status(400).json("Error: ", err));
            })
            .catch((err) => res.status(400).json("Error: ", err));
}

// export const updateGroupPlayer = (req, res) => {
//     const playerId = req.params.playerId;
//     GroupPlayer.updateOne({ playerId: playerId }, { playerName: req.body.playerName, playerEmail: req.body.playerEmail })
//       .then(() => res.json({ message: 'Player updated successfully' }))
//       .catch((err) => res.status(400).json({ error: err }));
//   }


