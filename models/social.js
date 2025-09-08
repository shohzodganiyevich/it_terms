const sequelize = require("./../config/db");
const { DataTypes } = require("sequelize");

const Social = sequelize.define("social", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  icon_file: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Social;
