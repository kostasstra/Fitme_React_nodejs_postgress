"use strict";

const {DataTypes} = require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("sectors", {
      sector_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sector_name: {
      type: DataTypes.STRING,
      allowNull:false,
      },    
      city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"cities",
          key:"city_id",
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
    await queryInterface.dropTable("sectors");
  }
};
