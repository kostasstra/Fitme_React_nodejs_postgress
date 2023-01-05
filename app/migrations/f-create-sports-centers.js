"use strict";

const {DataTypes} =require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("sport_centers", {
      sport_center_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      area_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"areas",
          key:"area_id",
        }
      },
      sport_center_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      mobile_number: {
        type: DataTypes.STRING,
      },
      postal_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
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
    await queryInterface.dropTable("sport_centers");
  }
};
