"use strict";

const {DataTypes} =require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("arena_details", {
        detail_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        detail_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        detail_type: {
            type: DataTypes.STRING,
            allowNull:false
        },
        detail_value_type: {
            type: DataTypes.STRING,
            allowNull:false
        },
        sport_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model:"sports",
                key:"sport_id",
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
    await queryInterface.dropTable("arena_details");
  }
};
