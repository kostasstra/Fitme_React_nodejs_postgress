"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SportCenters extends Model {
    static associate({ Areas, Arenas }) {
      this.belongsTo(Areas, {foreignKey: "area_id"})
      this.hasMany(Arenas, {foreignKey: "sport_center_id"})
    }
  }

  SportCenters.init({
    sport_center_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sport_center_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile_number: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    sequelize,
    tableName: "sport_centers",
    modelName: "SportCenters",
  });
  return SportCenters;
};
