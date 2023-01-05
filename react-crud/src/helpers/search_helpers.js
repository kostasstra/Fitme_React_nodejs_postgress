exports.getListOfAutocompleteItems = (areas) => {
    let output_unsorted = [];
    let area_result, occurences_in_output;
    for (var area_idx in areas) {
      let area_name = areas[area_idx]["area_name"];
      let sector_name = areas[area_idx]["sector_name"];
      let city_name = areas[area_idx]["city_name"];
      let region_name = areas[area_idx]["region_name"];
  
      if ((area_name === sector_name) && (sector_name === city_name)) {
        area_result = area_name + " (" + region_name + ")";
      } else if (area_name === sector_name) {
        area_result = area_name + " (" + region_name + ")";
      } else {
        area_result = area_name + " (" + city_name + ")";
      };
      let candidate_area_obj = { "name": area_result, "isRegion": false, "isCity": false, "isSector": false, "isArea": true };
      output_unsorted.push(candidate_area_obj);
  
      if (sector_name !== city_name) {
        let sector_result = sector_name + " (" + city_name + ")";
        occurences_in_output = output_unsorted.filter(e => e.name === sector_result).length
        if (occurences_in_output === 0) {
          let candidate_sector_obj = { "name": sector_result, "isRegion": false, "isCity": false, "isSector": true, "isArea": false };
          output_unsorted.push(candidate_sector_obj);
        }
      }
  
      let city_result = city_name + " (" + region_name + ")";
      occurences_in_output = output_unsorted.filter(e => e.name === city_result).length
      if (occurences_in_output === 0) {
        let candidate_city_obj = { "name": city_result, "isRegion": false, "isCity": true, "isSector": false, "isArea": false };
        output_unsorted.push(candidate_city_obj);
      }
  
      occurences_in_output = output_unsorted.filter(e => e.name === region_name).length
      if (occurences_in_output === 0) {
        var candidate_region_obj = { "name": region_name, "isRegion": true, "isCity": false, "isSector": false, "isArea": false };
        output_unsorted.push(candidate_region_obj);
      }
    }
    return output_unsorted;
  }
  
exports.getListOfNamesByType = (area_list, type) => {
    return area_list.filter(e => e[type] === true).map(e => e["name"]).sort().filter((element, element_idx, thisArray) => {
      return !element_idx || element !== thisArray[element_idx - 1]
    })
  }

exports.mergeFilters = (existingFilters, newSelecterFilters) => {
	let finalFilters, filterName, filterValue;
	const newSelecterFiltersSize = Object.keys(newSelecterFilters).length;
  const existingFiltersSize = Object.keys(existingFilters).length;
  if (newSelecterFiltersSize === 1) {
  	filterName = Object.keys(newSelecterFilters)[0];
    filterValue = newSelecterFilters[filterName];        	
    if (filterValue.length === 0) {
    	if (existingFiltersSize > 0) {
      	for (const item in existingFilters) {
      		if (item === filterName) {
        		finalFilters = {...existingFilters}
          	delete finalFilters[item];
        	} else {
        		finalFilters = {...existingFilters};
        	}
      	}
      } else {
      	finalFilters = {...existingFilters};
      }
    } else {
    	finalFilters = {...existingFilters,...newSelecterFilters};
    }
  } 
  return finalFilters
}
