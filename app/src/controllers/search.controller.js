const { Arenas, Areas, Cities, Regions, Sectors, Sports, SportCenters, Sequelize, sequelize} = require('../models');
const { QueryTypes } = require('sequelize');
const logger = require("../helpers/logging.helpers");
const db = require("../models");
const Op = db.Sequelize.Op;

const prefixObjectKeys = function(obj, prefix){
  if(typeof obj !== "object" || !obj){
    return false;
  }

  const keys = Object.keys(obj);
  prefix = prefix || '';

  for(let i = 0; i < keys.length ; i++){
    obj[prefix+keys[i]] = {[Op.in]: obj[keys[i]]}
    delete obj[keys[i]];
  }

  return obj;
};

const determineLimitAndOffset = (page, size) => {
  const limit = size ? +size : 6;
  const offset = page ? page * limit - limit: 0;
  return { limit, offset }; 
}

const getSportId = async (sport_name) => {
    try {
      const res = await Sports.findOne({where: {sport_name: sport_name}, raw: true});
      const sport_id = res.sport_id;
      return sport_id;
    } catch (error) {
      logger.log("ERROR",error) ;
    }
};

const getAllAreaIds = async () => {
  try {
    const res = await Areas.findAll({attributes: ["area_id"], raw: true});
    let area_ids = res.map( e => e.area_id);
    return area_ids;
  } catch (error) {
    logger.log("ERROR",error) ;
  }
};  

const getAreaIdbyAreaName = async (area_name) => {
    try {
      const res = await Areas.findOne({
        attributes: ["area_id"], 
        where: {area_name: area_name}, 
        raw: true
      });
      let area_id = res.area_id;
      return area_id;
    } catch (error) {
      logger.log("ERROR",error) ;
    }
};

const getAreaIdsbySectorName = async (sector_name) => {
  let query =`
    SELECT a.area_id FROM areas AS a 
    INNER JOIN sectors AS s ON a.sector_id = s.sector_id 
    WHERE s.sector_name='${sector_name}';
  `;
  try {
    const area_ids = await sequelize.query(query, { type: QueryTypes.SELECT });
    return area_ids.map(e => e.area_id);
  } catch (error) {
    logger.log("ERROR",error) ;
  };
};

const getAreaIdsbyCityName = async (city_name) => {
  let query =`
    SELECT a.area_id FROM areas AS a 
    INNER JOIN sectors AS s ON a.sector_id = s.sector_id
    INNER JOIN cities AS c ON s.city_id = c.city_id 
    WHERE c.city_name='${city_name}';
  `;
  try {
    const area_ids = await sequelize.query(query, { type: QueryTypes.SELECT });
    return area_ids.map(e => e.area_id);
  } catch (error) {
    logger.log("ERROR",error) ;
  };
};

const getAreaIdsbyRegionName = async (region_name) => {
  let query =`
    SELECT a.area_id FROM areas AS a 
    INNER JOIN sectors AS s ON a.sector_id = s.sector_id
    INNER JOIN cities AS c ON s.city_id = c.city_id 
    INNER JOIN regions AS r ON c.region_id = r.region_id 
    WHERE r.region_name='${region_name}';
  `;
  try {
    const area_ids = await sequelize.query(query, { type: QueryTypes.SELECT });
    return area_ids.map(e => e.area_id);
  } catch (error) {
    logger.log("ERROR",error) ;
  };
};

const getArenas = async (sport_id, area_ids, limit, offset, arena_details) => {
    let arenas;
    arena_details = prefixObjectKeys(arena_details, "arena_details.");
    try {
      arenas = await Arenas.findAndCountAll({
        limit: limit,
        offset: offset, 
        raw: true,     
        attributes:["arena_name", "arena_details", "sport_id"],
        include: {
            model: SportCenters,
            required:true,
            raw: true,  
            attributes: ["sport_center_name", "address", "postal_code", "phone_number", "mobile_number", "email", "url"],
            where: { area_id: area_ids }
        },
        where: { ...{ sport_id: sport_id }, ...arena_details },       
      })
      return arenas;
    } catch (error) {
      logger.log("ERROR",error) ;
    };
};

exports.getSearchResultsHome = async (req, res) => {
    let area_ids, area_name, area_type, arena_details, arenas, error, page, size, sport_id, sport_name;

    if (req.query.sport) {
      sport_name = req.query.sport;
    } else {
      error = "Search failed, both sport is mandatory";
      logger.log("ERROR",error) ;
      return res.status(400).json({ error: error });
    };

    if (req.query.arena_details && req.query.arena_details != "null" && req.query.arena_details != "[object Object]") {
      arena_details = JSON.parse(req.query.arena_details);
    } else {
      arena_details = {};
    }

    if ((req.query.area && req.query.type) && (req.query.area != "null" && req.query.type != "null")){
      area_name = req.query.area;
      area_type = req.query.type;
    } else if ((!req.query.area && !req.query.type) || (req.query.area === "null" && req.query.type === "null")){
      area_name = "";
      area_type = "";
    } else {
      error = "Search failed, both or none of area_name and area_typeare required";
      logger.log("ERROR",error) ;
      return res.status(400).json({ error: error });
    }

    if ((req.query.page && req.query.size) && (req.query.page != "null" && req.query.size != "null")){
      page = req.query.page;
      size = req.query.offset;
    } else if ((!req.query.page && !req.query.size) || (req.query.page === "null" && req.query.size === "null")){
      page = 1;
      size = 8;
    } else {
      error = "Search failed, both or none of page and size are required";
      logger.log("ERROR",error) ;
      return res.status(400).json({ error: error });
    }

    let { limit, offset } = determineLimitAndOffset(page, size);
    
    sport_id = await getSportId(sport_name);
    if (!sport_id) {
      error = "No sport_id could be found by the provided sport_name";
      logger.log("ERROR",error) ;
      return res.status(400).json({ error: error});
    }

    if (!area_name) {
      area_ids = await getAllAreaIds()
      arenas = await getArenas(sport_id, area_ids, limit, offset, arena_details);
      return res.status(200).json(arenas);
    }

    if (area_type === "isArea") {
      area_ids = await getAreaIdbyAreaName(area_name);
      if (area_ids) {
        arenas = await getArenas(sport_id=sport_id, area_ids=area_ids, limit, offset, arena_details);
        if (arenas) {
          return res.status(200).json(arenas);
        } else {
          error = "No arenas could be found";
          logger.log("ERROR",error) ;
          return res.status(404).json({ error: error});
        }
      } else {
        error = "Could not find an area";
        logger.log("ERROR",error) ;
        return res.status(400).json({ error: error});
      }
    } else if (area_type === "isSector") {
      area_ids = await getAreaIdsbySectorName(area_name);
      arenas = await getArenas(sport_id, area_ids, limit, offset, arena_details);
      return res.status(200).json(arenas);
    } else if (area_type === "isCity") {
      area_ids = await getAreaIdsbyCityName(area_name);
      arenas = await getArenas(sport_id, area_ids, limit, offset, arena_details);
      return res.status(200).json(arenas);
    } else if (area_type === "isRegion") {
      area_ids = await getAreaIdsbyRegionName(area_name);
      arenas = await getArenas(sport_id, area_ids, limit, offset, arena_details);
      return res.status(200).json(arenas);
    } else {
      error = "Incorrect type of area was provided.";
      logger.log("ERROR",error) ;
      return res.status(404).json({ error: error});
    }
};
