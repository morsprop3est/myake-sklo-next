const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const PostOffice = sequelize.define(
    "post_office",
    {
        ref: { type: DataTypes.STRING, allowNull: false, unique: true },
        description: { type: DataTypes.STRING, allowNull: false },
        description_ru: { type: DataTypes.STRING, allowNull: true },
        short_address: { type: DataTypes.STRING, allowNull: false },
        short_address_ru: { type: DataTypes.STRING, allowNull: true },
        settlement_description: { type: DataTypes.STRING, allowNull: false },
        settlement_area_description: { type: DataTypes.STRING, allowNull: false },
        settlement_type_description: { type: DataTypes.STRING, allowNull: false },
        postal_code: { type: DataTypes.STRING, allowNull: true },
        city_ref: { type: DataTypes.STRING, allowNull: false },
        type_of_post_office_ref: { type: DataTypes.STRING, allowNull: false },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

module.exports = PostOffice;
