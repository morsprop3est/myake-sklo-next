const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Cart = sequelize.define("cart", {
    session_id: { type: DataTypes.STRING, allowNull: false },
    product_id: { type: DataTypes.INTEGER, allowNull: false },
    product_name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    dimensions: { type: DataTypes.JSON, allowNull: true },
    glass_type: { type: DataTypes.STRING, allowNull: true },
    glass_thickness: { type: DataTypes.STRING, allowNull: true },
    shape: { type: DataTypes.STRING, allowNull: true },
});

module.exports = Cart;
