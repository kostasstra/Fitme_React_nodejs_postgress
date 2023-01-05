"use strict";

const {DataTypes} =require("sequelize");

module.exports = {
  up: async (queryInterface, Datatypes) => {
    await queryInterface.createTable("sports", {
      sport_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Datatypes.INTEGER
      },
      sport_name: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Datatypes.DATE
      },
      updatedAt: {
        type: Datatypes.DATE
      }
    });
  },
  down: async (queryInterface, Datatypes) => {
    await queryInterface.dropTable("sports");
  }
};
