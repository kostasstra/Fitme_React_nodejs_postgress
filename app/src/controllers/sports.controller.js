const { Sports, Sequelize} = require("../models");
const logger = require("../helpers/logging.helpers");

const getSports = async () => {
    try {
      const sports = await Sports.findAll({
        attributes:["sport_name"], raw: true
      });
      return sports;
    } catch (error) {
      logger.log("ERROR",error) ;
    };
};

exports.getAllSports = async () => {
    let error = "";
    const sports = await getSports();
    if (sports) {
        return sports;
    } else {
        error = "Sports couldn't be fetched from DB.";
        logger.log("ERROR",error) ;
    };
};
