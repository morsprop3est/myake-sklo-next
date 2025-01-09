const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const City = require("./City");

const PostOffice = sequelize.define(
    "post_office",
    {
        office_number: { type: DataTypes.STRING, allowNull: false },
        address: { type: DataTypes.STRING, allowNull: false },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

PostOffice.belongsTo(City, { foreignKey: "city_id" });

module.exports = PostOffice;
