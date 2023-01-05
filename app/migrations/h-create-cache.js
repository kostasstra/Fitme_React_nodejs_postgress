"use strict";

const {DataTypes} = require("sequelize");

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable("cache", {
            cache_name: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING,
            },     
            cache_data: {
                type: DataTypes.JSONB,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            }
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable("cache");
    }
};
