"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ArenaDetails extends Model {
    static associate({Sports}) {
        this.belongsTo(Sports, {foreignKey: "sport_id"})
    }
  }
  
  ArenaDetails.init({
    detail_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    detail_name: {
      type: DataTypes.STRING,
      allowNull:false,  
    },
    detail_type: {
        type: DataTypes.STRING,
        allowNull:false,  
      },
    detail_value_type: {
        type: DataTypes.STRING,
        allowNull:false,  
    },
    sport_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  }, 
  {
    sequelize,
    tableName: "arena_details",
    modelName: "ArenaDetails",
  });
  return ArenaDetails;
};
