const Order = require("../models/Order");
const PostOffice = require("../models/PostOffice");
const { sendOrderToKeyCRM } = require("../services/keycrmServices");

exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);

        res.status(201).json(order);

        try {
            await sendOrderToKeyCRM(order);
        } catch (error) {
            console.error("Error sending order to KeyCRM:", error.message || error);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id, {
            include: PostOffice,
        });
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
