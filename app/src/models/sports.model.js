"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Sports extends Model {
    static associate({Arenas, ArenaDetails}) {
      this.hasMany(Arenas, {foreignKey: "sport_id"})
      this.hasMany(ArenaDetails, {foreignKey: "sport_id"})  
    }  
  };

  Sports.init({
    sport_id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sport_name: DataTypes.STRING
  }, 
  {
    sequelize,
    tableName: "sports",
    modelName: "Sports",
  });
  return Sports;
};
