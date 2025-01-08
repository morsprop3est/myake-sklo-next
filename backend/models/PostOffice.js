const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const PostOffice = sequelize.define("post_office", {
    city: { type: DataTypes.STRING, allowNull: false },
    office_number: { type: DataTypes.STRING, allowNull: false },
});

module.exports = PostOffice;
