"use strict";

const {DataTypes} = require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("cities", {
      city_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      city_name: {
      type: DataTypes.STRING,
      allowNull:false,
      },    
      region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"regions",
          key:"region_id",
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
    await queryInterface.dropTable("cities");
  }
};
