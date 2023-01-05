"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Areas extends Model {
    static associate({Sectors, SportCenters}) {
        this.belongsTo(Sectors, {foreignKey: "sector_id"})
        this.hasMany(SportCenters, {foreignKey: "area_id"}) 
    }  
  }
  
  Areas.init({
    area_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    area_name: {
      type: DataTypes.STRING,
      allowNull:false,  
    },
    sector_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    tableName: "areas",
    modelName: "Areas",
  });
  return Areas;
};
