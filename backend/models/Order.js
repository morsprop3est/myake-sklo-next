const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const PostOffice = require("./PostOffice");

const Order = sequelize.define(
    "order",
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        first_name: { type: DataTypes.STRING(100), allowNull: false },
        last_name: { type: DataTypes.STRING(100), allowNull: false },
        phone: { type: DataTypes.STRING(20), allowNull: false },
        email: { type: DataTypes.STRING(100), allowNull: false },
        city: { type: DataTypes.STRING(100), allowNull: false },
        post_office_id: { type: DataTypes.INTEGER, allowNull: false },
        post_office_address: { type: DataTypes.STRING(255), allowNull: true },
        post_office_ref: { type: DataTypes.STRING(255), allowNull: true },
        products: { type: DataTypes.JSON, allowNull: false },
        total_price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        payment_type: {
            type: DataTypes.ENUM("wayforpay", "fop", "cash_on_delivery"),
            allowNull: false
        },
        payment_status: {
            type: DataTypes.ENUM("pending", "paid", "failed", "not_paid"),
            defaultValue: "pending"
        },
        delivery_type: {
            type: DataTypes.ENUM("nova_poshta", "pickup"),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        comments: { type: DataTypes.TEXT, allowNull: true },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

module.exports = Order;