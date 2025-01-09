const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const City = sequelize.define(
    "city",
    {
        city_id: { type: DataTypes.STRING, allowNull: false, unique: true },
        description: { type: DataTypes.STRING, allowNull: true },
        description_ru: { type: DataTypes.STRING, allowNull: true },
        area: { type: DataTypes.STRING, allowNull: true },
        settlement_type: { type: DataTypes.STRING, allowNull: true },
        settlement_type_description: { type: DataTypes.STRING, allowNull: true },
        area_description: { type: DataTypes.STRING, allowNull: true },
        area_description_ru: { type: DataTypes.STRING, allowNull: true },
        city_ref: { type: DataTypes.STRING, allowNull: true },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

module.exports = City;
