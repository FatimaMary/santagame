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
    const groupId = Number(req.params.groupId);
    PlayGroup.findOne({ groupId: groupId })
      .then((group) => {
        if (!group) {
          res.status(404).json({ message: 'Group not found' });
        } else {
          res.json(group);
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  };

export const getDetailsByEmail = (req, res) => {
  const email = req.body.email;
  PlayGroup.find({ organiserEmail: email })
      .then((players) => {
        if (players.length === 0) {
          res.status(404).json({ message: 'No one players in this group' });
        } else {
          const friendsDetails = players.map(player => {
            return {
              groupId: player.groupId,
              friendsName: player.friendsName,
            };
          });
          res.json(friendsDetails);
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
};

// export const getDrawnNames = async(req, res) => {
//   try {
//     const groupId = req.params.groupId;

//     const namesCollection = PlayGroup('friendsName')

//     const playGroup = await PlayGroup.findOne({ groupId: groupId });
      
//     if (!playGroup) {
//       return res.status(404).json({ message: 'Group not found' });
//     }

//     const names = playGroup. friendsName;

//     function shuffleArray(array) {
//       for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//       }
//     }

//     shuffleArray(names);
//     const pairings = names.map((giver, index) => ({
//       giver,
//       receiver: names[(index + 1) % names.length]
//     }));
//     await namesCollection.insertMany(pairings);
//     const retrievedPairings = await namesCollection.find().toArray();
//     retrievedPairings.forEach(pairing => {
//       console.log(`${pairing.giver} is the Secret Santa for ${pairing.receiver}`);
//     });
//   }
//   catch (err) {
//     return res.status(400).json({ error: err.message });
//   }
// }

export const getDrawnNames = async (req, res) => {
  try {
    const groupId = req.params.groupId;

    const playGroup = await PlayGroup.findOne({ groupId: groupId });

    if (!playGroup) {
      return res.status(404).json({ message: 'Group not found' });
    }

    const names = playGroup.friendsName;

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(names);
    const pairings = names.map((giver, index) => ({
      giver,
      receiver: names[(index + 1) % names.length],
    }));

    const namesCollection = await PlayGroup.updateOne(
      { groupId: groupId },
      { $set: { friendsName: pairings } }
    );

    const retrievedPairings = await PlayGroup.findOne({ groupId: groupId });

    retrievedPairings.friendsName.forEach((pairing) => {
      console.log(`${pairing.giver} is the Secret Santa for ${pairing.receiver}`);
    });

    return res.status(200).json({ message: 'Secret Santa draw completed' });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

