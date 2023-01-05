const { Areas, Arenas, Sports, Sequelize, sequelize} = require("../models");
const { QueryTypes } = require("sequelize");
const arena_details_controller = require("./arena_details.controller");
const logger = require("../helpers/logging.helpers");

const getArenaDetailsAndSportId = async () => {
    let arena_details_and_sport_id;
    const query = `
        SELECT DISTINCT
            arena_details,
            sport_id
        FROM 
            "arenas"
        WHERE
            arena_details != '{}';
    `;
    try {
        arena_details_and_sport_id = await sequelize.query(query, { type: QueryTypes.SELECT });
        return arena_details_and_sport_id;
      } catch (error) {
        logger.log("ERROR",error) ;
      };
};

const getArenaDetailsAndSportIdArrayFromDB = async (data_from_db) => {
    // Example input:
    // [
    //   { arena_details: { random1: 'value1', random2: 'value5' }, sport_id: 1},
    //   { arena_details: { random3: 'value1' }, sport_id: 2 },
    //   { arena_details: { random1: 'value1', random2: 'value1' }, sport_id: 1}
    // ] 
    //
    // Example output (based on the above input):
    // [
    //   {"sport_id":1, arena_details: [{"name": "random1", "values":["value1"], arena_details_type: "singleselect"},{"name": "random2", "values":["value1", "value5"}, arena_details_type: "multiselect"]}
    //   {"sport_id":2, arena_details: [{"name": "random3", "values":["value1"], arena_details_type: "multiselect"}]}
    // ]
    //
    let output_list = [];
    const arena_details = await arena_details_controller.getAllArenaDetailsAreas()
    if (!arena_details) {
        return
    }
    // Iterate through the object that were fetched by the database (remenber they are DISTINCT combinations)
    for ( let i = 0; i < data_from_db.length ; i++ ) {
        let element_sport_id = data_from_db[i]["sport_id"];
        let element_arena_details = data_from_db[i]["arena_details"];
        const checkSportId = (obj) => obj.sport_id === element_sport_id;
        // Check if the "final list" contains the first sport_id, if not it adds it in the list
        if (! output_list.some(checkSportId)) {
            output_list.push({"sport_id": element_sport_id});
        }
        // Find the index of the inspected sport_id in the "final list"
        let sportIdObjIndex = output_list.findIndex((obj => obj.sport_id == element_sport_id));
        // Check if in the "final_list", in the list for our examined sport_id, we have an "arena_details" key/value. If not, initialize it.
        if (! output_list[sportIdObjIndex]["arena_details"]) {
            output_list[sportIdObjIndex]["arena_details"] = [];
        }
        // Iterate through the inspected elements arena_details.
        for (let key in element_arena_details) {
            const checkArenaDetail = (obj) => obj.name === key;
            // Check if the in the "final list", under the sport_id, in arena_details value, exists a key with value = to the examined key.
            // If not, initialize it and push it in the arena_details value.
            if (! output_list[sportIdObjIndex]["arena_details"].some(checkArenaDetail)) {
                let detailTypeIdx = arena_details.findIndex((obj => (obj.sport_id == element_sport_id) && (obj.detail_name == key) ));
                let detailType = arena_details[detailTypeIdx]["detail_type"];
                let arena_details_obj = {"name": key, "arena_details_type": detailType, "values":[]};
                output_list[sportIdObjIndex]["arena_details"].push(arena_details_obj);
            }
            // Check if the the value of each key "{ random1: 'value1', random2: 'value5' }" exists in the list of values in final list.
            // If not, insert it
            let arenaDetailObjIndex = output_list[sportIdObjIndex]["arena_details"].findIndex((obj => obj.name == key));
            if (!  output_list[sportIdObjIndex]["arena_details"][arenaDetailObjIndex]["values"].includes(element_arena_details[key])) {
                output_list[sportIdObjIndex]["arena_details"][arenaDetailObjIndex]["values"].push(element_arena_details[key])
            }
        }
    }
    
    return output_list;
};

exports.getArenaDetailsAndSportIdArray = async () => {     
    let error = "";
    const arena_details_and_sport_id = await getArenaDetailsAndSportId();
    if (arena_details_and_sport_id) {
        let cache_data = await getArenaDetailsAndSportIdArrayFromDB(arena_details_and_sport_id);
        return cache_data;
    } else {
        error = "Arena details couldn't be fetched from DB.";
        logger.log("ERROR",error) ;
    }
};