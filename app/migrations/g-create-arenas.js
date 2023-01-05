"use strict";

const {DataTypes} =require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("arenas", {
      arena_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      sport_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"sports",
          key:"sport_id",
        }
      },
      sport_center_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:"sport_centers",
          key:"sport_center_id",
        }
      },
      arena_details: {
        type: DataTypes.JSONB,
      },
      arena_name: {
        type: DataTypes.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("arenas");
  }
};
