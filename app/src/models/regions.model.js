"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Regions extends Model {
    static associate({Cities}) {
      this.hasMany(Cities, {foreignKey: "city_id"}) 
    }         
  }

  Regions.init({
    region_id: {
       type:DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
    },
    region_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "regions",
    modelName: "Regions",
  });
  return Regions;
};
