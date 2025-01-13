const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Cart = sequelize.define("cart", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    session_id: { type: DataTypes.STRING, allowNull: false },
    products: { type: DataTypes.JSON, allowNull: true },
    total_price: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
}, {
    timestamps: true,
    underscored: true,
});

module.exports = Cart;
