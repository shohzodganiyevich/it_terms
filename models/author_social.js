const sequelize = require("./../config/db");
const { DataTypes } = require("sequelize");
const Author = require("./author");

const Author_social = sequelize.define("author_social", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  social_link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Author.hasMany(Author_social);
Author_social.belongsTo(Author);

module.exports = Author_social;
