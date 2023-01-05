"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Sectors extends Model {
    static associate({Areas, Cities}) {
        this.belongsTo(Cities, {foreignKey: "city_id"})
        this.hasMany(Areas, {foreignKey: "area_id"})
    }  
  }
  
  Sectors.init({
    sector_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sector_name: {
      type: DataTypes.STRING,
      allowNull:false,  
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, 
  {
    sequelize,
    tableName: "sectors",
    modelName: "Sectors",
  });
  return Sectors;
};
