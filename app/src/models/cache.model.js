"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Cache extends Model {}

  Cache.init({
    cache_name: {
       type:DataTypes.STRING,
       primaryKey: true,
    },
    cache_data: {
      type:DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "cache",
    modelName: "Cache",
  });
  return Cache;
};
