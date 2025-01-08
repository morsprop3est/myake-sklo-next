const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
    try {
        const cartItem = await Cart.create(req.body);
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCartBySession = async (req, res) => {
    try {
        const items = await Cart.findAll({ where: { session_id: req.params.session_id } });
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const deleted = await Cart.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(200).json({ message: "Item removed from cart" });
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
