// Imports
import React, { useEffect, useState } from "react";
// Component imports
import Autocomplete from "../components/Autocomplete";
// Require imports
const search_helpers = require("../helpers/search_helpers");

function SearchModal(props)  {
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
    }
    window.location = search_url;
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
    <div className="modal fade hide modal-container signup-form modalsearch" style={{overflowY: "auto" }} tabIndex= "-1"  role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
      <div className=" modal-dialog-centered  role=document" style={{width:"65%", margin: "auto", marginTop: "5%", paddingBottom: "50%"}}>
        <div className="modal-content">
          <div className="modal-header align-items-center mh-bg-2">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" className="la la-times-circle" />
            </button>
          </div>
          <div className="modal-body user-action-meta">
            <div className="input-box py-4 user-action-meta"/>
            <span className=" form-icon" />   
            <div className="container">
              <div className="row">
                <div className="col-lg-12 ml-auto"> 
                  <form onSubmit={handleSubmit}>
                    <div className="main-search-input  position-relative z-index-1 ">
                      <div className="main-search-input-item ml-0">     
                        <form id="main-search" className="form-box">  
                          <div className="input-box">
                            <label className="label-text">Τι γήπεδο ψάχνεις;</label>
                            <div className="form-group mb-0">
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
                      <div className = "main-search-input-item">
                        <form id="main-search" className="form-box">  
                          <div className="input-box">
                            <label className="label-text">Τι περιοχή ψάχνεις;</label>
                            <div className="form-group mb-0">
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
            <div className="modal hide fade modal-container login-form" id="loginModal" tabIndex="-1"   role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header align-items-center mh-bg">
                    <h5 className="modal-title" id="loginModalTitle">Hey, Welcome back!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" className="la la-times-circle" modal-backdrop="false"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default SearchModal;
