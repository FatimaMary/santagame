import GiftProducts from '../models/Products.js';

export const postProduct = (req, res) => {
    const productUrl = req.body.productUrl;
    const price = req.body.price;
    const productName = req.body.productName;
    const description = req. body. description;
    const wishlistId = req.body.wishlistId;

    const newProduct = new GiftProducts({
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
    GiftProducts.find()
        .then((products) => res.json(products))
        .catch((err) => res.status(400).json({ err: err.message}));
};

export const deleteProduct = (req, res) => {
    const productId = req.params.productId;
    GiftProducts.deleteOne({ productId: productId })
        .then(() => {
            res.status(200).json({ message: "Product deleted successfully" });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error deleting product', details: error});
        });
};