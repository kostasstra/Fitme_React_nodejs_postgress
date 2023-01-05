"use strict";

const {DataTypes} =require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("refresh_tokens", {
      token: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      expiry_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model:"users",
          key:"user_id",
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
    await queryInterface.dropTable("refresh_tokens");
  }
};
