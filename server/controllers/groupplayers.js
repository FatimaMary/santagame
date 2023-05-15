import GroupPlayer from "../models/GroupPlayers.js";
import PlayGroup from "../models/PlayGroups.js";

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
  const playerId = Number(req.params.playerId);
  
  console.log("Player Id: " , playerId);
  console.log("Request body: " , req.body);
  GroupPlayer.updateOne({ playerId: playerId }, { $set: {
    playerName: req.body.playerName,
    playerEmail: req.body.playerEmail,
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

  
  // export const getGroupsByEmail = (req, res) => {
  //   const email = req.body.email;
  //   GroupPlayer.find({ playerEmail: email })
  //     .then((player) => {
  //       if(!player) {
  //         res.status(404).json({ message: 'you are not in any group' });
  //       } else {
  //         res.json(player);
  //       }
  //     })
  //     .catch((err) => res.status(400).json({ message: err.message }));
  // }

  
  export const getGroupsNameByEmail = (req, res) => {
    const email = req.body.email;
    GroupPlayer.find({ playerEmail: email })
      .then((players) => {
        if (players.length === 0) {
          res.status(404).json({ message: 'you are not in any group' });
        } else {
          const groupNames = players.map(player => player.groupName); 
          res.json(groupNames);
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  }
  
  export const getFullDetailsByEmail = (req, res) => {
    const email = req.body.email;
    GroupPlayer.find({ playerEmail: email })
      .then((players) => {
        if (players.length === 0) {
          res.status(404).json({ message: 'you are not in any group' });
        } else {
          const groups = players.map(player => {
            return {
              groupId: player.groupId,
              groupName: player.groupName
            };
          });
          // res.json(groups);
          const groupId = groups.groupId;
          PlayGroup.find(groupId)
            .then((friends) => {
              if(friends.length === 0) {
                res.status(404).json({ message: 'no one in the play group'});
              } else {
                const friendsDetails = friends.map(friend => {
                  return {
                    groupName: friend.groupName,
                    friendsName: friend.friendsName,
                    giftExchangeDate: friend.giftExchangeDate,
                  }
                });
                res.json(friendsDetails);
              }
            })
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  }
  
  export const getIdsByGroupname = (req, res) => {
    const groupName = req.body.groupName;
    GroupPlayer.find({ groupName: groupName })
      .then((players) => {
        if (players.length === 0) {
          res.status(404).json({ message: 'No one players in this group' });
        } else {
          const playerIds = players.map(player => {
            return {
              groupId: player.groupId,
              playerId: player.playerId,
            };
          });
          res.json(playerIds);
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  }
  
  export const getGroupsByEmail = (req, res) => {
    const email = req.body.email;
    GroupPlayer.find({ playerEmail: email })
      .then((players) => {
        if (players.length === 0) {
          res.status(404).json({ message: 'you are not in any group' });
        } else {
          const groups = players.map(player => {
            return {
              groupId: player.groupId,
              groupName: player.groupName
            };
          });
          res.json(groups);
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  }
  