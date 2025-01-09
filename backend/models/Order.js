const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const PostOffice = require("./PostOffice");

const Order = sequelize.define(
    "order",
    {
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        city: { type: DataTypes.STRING, allowNull: false },
        post_office_id: { type: DataTypes.INTEGER, allowNull: true },
        products: { type: DataTypes.JSON, allowNull: false },
        total_price: { type: DataTypes.FLOAT, allowNull: false },
        payment_type: { type: DataTypes.ENUM("wayforpay", "fop", "cash_on_delivery"), allowNull: false },
        payment_status: { type: DataTypes.ENUM("pending", "paid", "failed"), defaultValue: "pending" },
        delivery_type: { type: DataTypes.ENUM("nova_poshta", "pickup"), allowNull: false },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

Order.belongsTo(PostOffice, { foreignKey: "ref" });

module.exports = Order;
