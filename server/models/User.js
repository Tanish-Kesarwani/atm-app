const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  pin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0
  }
});

module.exports = User;