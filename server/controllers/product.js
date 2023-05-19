import Products from '../models/Products.js';

export const postProduct = (req, res) => {
    const productUrl = req.body.productUrl;
    const price = req.body.price;
    const productName = req.body.productName;
    const description = req. body. description;
    const wishlistId = req.body.wishlistId;

    const newProduct = new Products({
        productUrl,
        price,
        productName,
        description,
        wishlistId,
    });

    newProduct
        .save()
        .then((product) => res.json(product))
        .catch((err) => res.status(400).json({ error: err.message }));
};

export const getProducts = (req, res) => {
    Products.find()
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json({ err: err.message}));
};

export const deleteProduct = (req, res) => {
    Products.deleteOne()
}