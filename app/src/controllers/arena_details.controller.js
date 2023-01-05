const { ArenaDetails, Sequelize, sequelize} = require("../models");
const { QueryTypes } = require('sequelize');
const logger = require("../helpers/logging.helpers");

const getArenaDetails = async () => {
    try {
        const arena_details = await ArenaDetails.findAll({raw: true});
        return arena_details;
      } catch (error) {
        logger.log("ERROR", error) ;
      };
};

exports.getAllArenaDetailsAreas = async () => {     
    let error = "";
    const arena_details = await getArenaDetails();
    if (arena_details) {
        return arena_details;
    } else {
        error = "Arena details couldn't be fetched from DB.";
        logger.log("ERROR", error);
    }
};
