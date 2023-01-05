"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    static associate({Regions, Sectors}) {
        this.belongsTo(Regions, {foreignKey: "region_id"})
        this.hasMany(Sectors, {foreignKey: "sector_id"})
    }  
  }
  
  Cities.init({
    city_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city_name: {
      type: DataTypes.STRING,
      allowNull:false,  
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    tableName: "cities",
    modelName: "Cities",
  });
  return Cities;
};
