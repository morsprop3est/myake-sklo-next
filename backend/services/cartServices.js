const Cart = require("../models/Cart");

const clearCartBySessionId = async (session_id) => {
    try {
        await Cart.destroy({ where: { session_id } });
    } catch (error) {
        console.error("Error clearing cart:", error);
        throw new Error("Error clearing cart");
    }
};

module.exports = {
    clearCartBySessionId
};