"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate({ RefreshTokens, Roles }) {
      this.belongsTo(Roles, {foreignKey: "role_id"});
      this.hasMany(Roles, {foreignKey: "user_id"});
      this.hasOne(RefreshTokens, {foreignKey: "user_id"});
    }
  };

  Users.init({
    user_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
  }, 
  {
    sequelize,
    tableName: "users",
    modelName: "Users",
  });
  return Users;
};
