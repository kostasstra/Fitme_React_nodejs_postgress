const { Areas, Arenas, Cache, Sports, Sequelize, sequelize} = require("../models");
const areas_controller = require("./areas.controller");
const arenas_controller = require("./arenas.controller");
const logger = require("../helpers/logging.helpers");
const sports_controller = require("./sports.controller");
const { QueryTypes } = require("sequelize");

const clearCacheInDB = async () => {
    const query = "TRUNCATE cache;";
    await sequelize.query(query, { type: QueryTypes.SELECT });
};

const insertToCache = async (cache_name, cache_data) => {
    await Cache.create({cache_name: cache_name, cache_data: cache_data});
};

const getDataFromCache = async (cache_name) => {
    try {
        const data =  await Cache.findOne({where: {cache_name: cache_name}, raw: true});
        return data;
      } catch (error) {
        logger.log("ERROR",error) ;
      };
  };

exports.clearCache = async () => { await clearCacheInDB() };

exports.getFromCache = async (req, res) => {
    let cache_data, cache_name;
    if (req.query.cache_name) {
        cache_name = req.query.cache_name;
      } else {
        error = "Get from cache failed, cache_name is mandatory";
        logger.log("ERROR",error) ;
        return res.status(400).json({ error: error });
    };

    cache_data = await getDataFromCache(cache_name);
    if (cache_data) {
      return res.status(200).json(cache_data);
    } else {
      error = "No cache could be found, with provided cache_name: " + cache_name;
      logger.log("ERROR",error) ;
      return res.status(404).json({ error: error });
    }
};

exports.setCache = async (cache_name) => {
    let cached_data;
    switch (cache_name) {
        case "arena_details_and_sport_id":
            cached_data = await arenas_controller.getArenaDetailsAndSportIdArray();
            break;
        case "sports":
            cached_data = await sports_controller.getAllSports();
            break;
        case "areas":
            cached_data = await areas_controller.getAllAreas();
            break;
    }
    if (cached_data) {
        await insertToCache(cache_name, cached_data);
    } else {
        error = "No data to cache for cache name: " + cache_name;
        logger.log("ERROR",error) ;
    }
};
