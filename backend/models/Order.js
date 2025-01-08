const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Order = sequelize.define("order", {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    post_office: { type: DataTypes.STRING, allowNull: true },
    products: { type: DataTypes.JSON, allowNull: false },
    total_price: { type: DataTypes.FLOAT, allowNull: false },
    payment_type: { type: DataTypes.ENUM("wayforpay", "fop", "postpay"), allowNull: false },
    payment_status: { type: DataTypes.ENUM("paid", "pending"), defaultValue: "pending" },
    delivery_type: { type: DataTypes.ENUM("nova_poshta", "pickup"), allowNull: false },
});

module.exports = Order;
