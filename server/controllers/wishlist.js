import Wishlists from "../models/Wishlist.js";

export const postWishlist = (req, res) => {
    const sex = req.body.sex;
    const age = req.body.age;
    const playerId = req.body.playerId;

    const newWishlist = new Wishlists({
        sex,
        age,
        playerId
    });

    newWishlist
        .save()
        .then((wishlist) => res.json(wishlist))
        .catch((err) => res.status(400).json("Error: " + err));
};

