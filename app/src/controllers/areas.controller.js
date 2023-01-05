const { Sequelize, sequelize} = require("../models");
const { QueryTypes } = require('sequelize');
const logger = require("../helpers/logging.helpers");

const getAreas = async () => {
  let areas;
  const query = `
    SELECT 
      r.region_name,
      c.city_name,
      s.sector_name,
      a.area_name 
    FROM 
    "regions" AS r 
    INNER JOIN "cities" AS c ON r.region_id = c.region_id 
    INNER JOIN "sectors" AS s ON s.city_id= c.city_id 
    INNER JOIN "areas" AS a ON a.sector_id = s.sector_id;
  `;
  
  try {
    areas = await sequelize.query(query, { type: QueryTypes.SELECT, raw: true});
    return areas;
  } catch (error) {
    logger.log("ERROR", error);
  };
};

exports.getAllAreas = async () => {     
    let error = "";
    const areas = await getAreas();
    if (areas) {
        return areas
    } else {
        error = "Areas couldn't be fetched from DB.";
        logger.log("ERROR", error);
    }
};
