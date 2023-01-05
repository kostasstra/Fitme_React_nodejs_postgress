"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Arenas extends Model {
    static associate({SportCenters, Sports}) {
        this.belongsTo(SportCenters, {foreignKey: "sport_center_id"})
        this.belongsTo(Sports, {foreignKey: "sport_id"})
    }
  }

  Arenas.init({
    arena_id: {
       type:DataTypes.INTEGER,
       primaryKey: true,
       autoIncrement: true,
    },
    arena_details: {
      type:DataTypes.JSONB,
    },
    arena_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    sport_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sport_center_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "arenas",
    modelName: "Arenas",
  });
  return Arenas;
};
