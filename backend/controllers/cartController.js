const Cart = require("../models/Cart");
const { calculatePrice } = require('../utils/calculatePrice');

exports.addToCart = async (req, res) => {
    try {
        const { session_id, product } = req.body;

        const price = calculatePrice(product);
        product.price = price;

        const existingCart = await Cart.findOne({ where: { session_id } });

        let newProductId = 1;
        if (existingCart) {
            const maxProductId = existingCart.products.reduce((max, p) => Math.max(max, p.product_id), 0);
            newProductId = maxProductId + 1;
        }

        const newProduct = { ...product, product_id: newProductId };

        if (!existingCart) {
            const newCart = await Cart.create({
                session_id,
                products: [newProduct],
                total_price: newProduct.price * newProduct.quantity,
            });
            return res.status(201).json(newCart);
        }

        const products = [...existingCart.products, newProduct];

        const sortedProducts = products.map((p, index) => ({ ...p, product_id: index + 1 }));

        const totalPrice = sortedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);

        existingCart.products = sortedProducts;
        existingCart.total_price = totalPrice;
        await existingCart.save();

        res.status(200).json(existingCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCartBySession = async (req, res) => {
    try {
        const cart = await Cart.findOne({ where: { session_id: req.params.session_id } });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const { session_id, product_id } = req.body;
        const cart = await Cart.findOne({ where: { session_id } });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const updatedProducts = cart.products.filter((p) => p.product_id !== product_id);

        const sortedProducts = updatedProducts.map((p, index) => ({ ...p, product_id: index + 1 }));

        const totalPrice = sortedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);

        cart.products = sortedProducts;
        cart.total_price = totalPrice;
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.updateItemQuantity = async (req, res) => {
    try {
        const { session_id, product_id, quantity } = req.body;
        const cart = await Cart.findOne({ where: { session_id } });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const productIndex = cart.products.findIndex((p) => p.product_id === product_id);
        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        cart.products[productIndex].quantity = quantity;

        const sortedProducts = cart.products.map((p, index) => ({ ...p, product_id: index + 1 }));

        const totalPrice = sortedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0);

        cart.products = sortedProducts;
        cart.total_price = totalPrice;
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.clearCart = async (req, res) => {
    try {
        const { session_id } = req.params;
        const deleted = await Cart.destroy({ where: { session_id } });
        if (deleted) {
            res.status(200).json({ message: "Cart cleared" });
        } else {
            res.status(404).json({ message: "Cart not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
