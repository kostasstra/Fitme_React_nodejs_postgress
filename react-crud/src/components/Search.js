// Imports
import React, { useEffect, useState } from "react";
// Component imports
import Autocomplete from "./Autocomplete";
// Require imports
const search_helpers = require("../helpers/search_helpers");

function Search(props) {
  // State related variables
  const [area, setArea] = useState("");
  const [areas, setAreas] = useState();
  const [areasRaw, setAreasRaw] = useState();
  const [sport, setSport] = useState("");
  const [sports, setSports] = useState();

  const getAreasRaw = async () => {
    const areas_api = "/api/cache/getCache?cache_name=areas";
    await fetch(areas_api, {
      method: "GET", 
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(resp => resp.json())
      .then(data => {
        setAreasRaw(search_helpers.getListOfAutocompleteItems(data.cache_data));
      })
    }
  
  const getSports = async () => {
    const sports_api = "/api/cache/getCache?cache_name=sports";
    await fetch(sports_api, {
      method: "GET", 
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(resp => resp.json())
      .then(data => {
        let sport_list = data.cache_data.map(e => e.sport_name).sort();
        setSports(sport_list);
      })
  }

  function handleSubmit(event) {
    let search_url;
    event.preventDefault();
    if (sport) {
      if (area) {
        const areaElement = areasRaw.filter(e => Object.keys(e).some(function (k) { return e[k] === area; }))[0];
        const area_name = areaElement["name"].substring(0, areaElement["name"].lastIndexOf(" (")) || areaElement["name"];
        const area_type = Object.keys(areaElement).find(key => areaElement[key] === true);
        search_url = "/search_results?area=" + area_name + "&type=" + area_type + "&sport=" + sport;
      } else {
        search_url = "/search_results?sport=" + sport;
      }
      window.location = search_url;
    }
  }

  useEffect(() => {
    if (! sports) { getSports() };
    if (areasRaw && !areas) {
      let regions_list = search_helpers.getListOfNamesByType(areasRaw, "isRegion");
      let cities_list = search_helpers.getListOfNamesByType(areasRaw, "isCity");
      let sectors_list = search_helpers.getListOfNamesByType(areasRaw, "isSector");
      let areas_list = search_helpers.getListOfNamesByType(areasRaw, "isArea");
      let combined_list = areas_list.concat(sectors_list).concat(cities_list).concat(regions_list);
      setAreas(combined_list);
    } else if (!areasRaw) {
      getAreasRaw();
    };
  }, [areasRaw]);

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12 ml-auto"> 
          <form onSubmit={handleSubmit}>
            <div class="main-search-input  position-relative z-index-1 ">
              <div class="main-search-input-item ml-0">     
                <form id="main-search" className="form-box">  
                  <div class="input-box">
                    <label className="label-text">Τι γήπεδο ψάχνεις;</label>
                    <div class="form-group mb-0">
                      <Autocomplete
                        suggestions={sports}
                        placeholder="Ψάξε για Αθλημα"
                        className="form-control"
                        type="search"
                        setValue={setSport}
                      />          
                    </div>
                  </div>
                </form>
              </div>
              <div className = "main-search-input-item   ">
                <form id="main-search" className="form-box" >  
                  <div class="input-box">
                    <label className="label-text">Τι περιοχή ψάχνεις;</label>
                    <div class="form-group mb-0">
                      <Autocomplete
                        suggestions={areas}
                        placeholder="Ψάξε για Περιοχή"
                        className="form-control"
                        type="search"
                        setValue={setArea}
                      />          
                     </div>
                  </div>
                </form>
              </div>     
              <div className="main-search-input-item w-10 ml-2 mt-2">
                <label className="label-text"></label>
                <div className="form-group mb-0">
                  <button className="theme-btn gradient-btn border-0 w-100" type="submit" ><i className="la la-search mr-2" />Αναζήτηση </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>  
  );
}

export default Search;
