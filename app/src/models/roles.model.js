"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate({ Users }) {
      this.hasMany(Users, {foreignKey: "role_id"})
      this.belongsTo(Users, {foreignKey: "user_id"})
    }
  };

  Roles.init({
    role_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    role_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  }, 
  {
    sequelize,
    tableName: "roles",
    modelName: "Roles",
  });
  return Roles;
};