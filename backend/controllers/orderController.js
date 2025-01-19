const Order = require("../models/Order");
const PostOffice = require("../models/PostOffice");
const { sendOrderToKeyCRM } = require("../services/keycrmServices");
const { generateWayForPayForm } = require("../services/wayforpayServices");
const cartService = require("../services/cartServices");


exports.createOrder = async (req, res) => {
    const { session_id, products, total_price, ...orderDetails } = req.body;

    if (!session_id) {
        return res.status(400).send("session_id is required");
    }

    try {
        const newOrder = await Order.create({
            session_id,
            products,
            total_price,
            ...orderDetails,
        });

        const orderId = newOrder.id;

        await cartService.clearCartBySessionId(session_id);

        await generateWayForPayForm({ ...newOrder.toJSON(), orderId });

        res.status(201).json(newOrder);
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).send("Internal Server Error");
    }
}

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
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