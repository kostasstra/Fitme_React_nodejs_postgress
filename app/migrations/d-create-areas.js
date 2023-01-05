"use strict";

const {DataTypes} =require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("areas", {
      area_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      area_name: {
      type: DataTypes.STRING,
      allowNull:false,
      },    
      sector_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"sectors",
          key:"sector_id",
        }
     },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("areas");
  }
};
