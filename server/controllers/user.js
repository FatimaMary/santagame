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
    const dummyUserId = req.body.dummyUserId;

    const newUser = new Users({
        userId,
        name,
        mobileNumber,
        email,
        password,
        dummyUserId,
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

// export const updateUser = (req, res) => {
//     const userId = req.params.userId;
//     Users.findOne({ userId })
//         .then((user) => {
//             user.password = req.body.password;

//             profile
//                 .save()
//                 .then(() => res.json("User Updated"))
//                 .catch((err) => res.status(400).json("Error: " + err));
//         })
//         .catch((err) => res.status(400).json("Error: " + err));
// };

export const updateUser = (req, res) => {
    const name = req.params.name;
    Users.findOne({ name: name})
        .then((user) => {
            user.password = req.body.password;
            user.mobileNumber = req.body.mobileNumber;
            // user.userId = req.body.userId;
            user
                .save()
                .then(() => res.json("user Updated"))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
}

export const getUserByEmail = (req, res) => {
    const email = req.params.email;
    Users.find({ email: email })
    .then((user) => {
      if (user.length === 0) {
        res.status(200).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    })
    .catch((err) => res.status(400).json({ message: err.message }));
  }