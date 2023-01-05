//Imports
import React, {useEffect, useState} from "react";
// Require Imports
const search_helpers = require("../helpers/search_helpers");

function ArenaDetailsFilter(props) {
  // State related variables
  const [thisFilterSelections, setThisFilterSelections] = useState({})

  const handleFilterChangeRadio = (event) => {
    let newSelectedFilters = thisFilterSelections;
    let selected_item_name = event.target.id.split("-")[2];
    let selected_item_value = event.target.id.split("-")[1];

    newSelectedFilters[selected_item_name] = [selected_item_value];
    
    const newFilters = search_helpers.mergeFilters(props.filters, newSelectedFilters);
    props.setFilters(newFilters);
    setThisFilterSelections(newSelectedFilters);
  }

  const handleFilterChangeCheckbox = (event) => {
    let newSelectedFilters = thisFilterSelections;
    let checkbox_name = event.target.id.split("-")[2];
    let checkbox_value = event.target.id.split("-")[1];

    if (checkbox_name in newSelectedFilters) {
      if (newSelectedFilters[checkbox_name].includes(checkbox_value)) {
        newSelectedFilters[checkbox_name] = newSelectedFilters[checkbox_name].filter(e => e != checkbox_value);
      } else {
        newSelectedFilters[checkbox_name].push(checkbox_value);
      };
    } else {
      newSelectedFilters[checkbox_name] = [checkbox_value];
    };

    const newFilters = search_helpers.mergeFilters(props.filters, newSelectedFilters);
    props.setFilters(newFilters);
    setThisFilterSelections(newSelectedFilters);
  }

  const slice_value = 2;

  return (
    <div className="sidebar-widget" key={props.ukey}>
      <h3 className="widget-title">{props.filterName}</h3>
      <div className="stroke-shape mb-4" />
      { props.filterType === "multiselect" &&
      <div className="checkbox-wrap">
          { props.filterValues.length > slice_value ? (props.filterValues.sort().slice(0, slice_value).map(function(r, i){
            return <div className="custom-checkbox" key={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>
              <input type="checkbox" id={`value-${r}-${props.filterName}-${i}-${props.ukey}`} onChange={handleFilterChangeCheckbox} />
              <label htmlFor={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>{r}</label>
            </div>
          })
          ) : (props.filterValues.sort().map(function(r, i){
            return <div className="custom-checkbox" key={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>
              <input type="checkbox" id={`value-${r}-${props.filterName}-${i}-${props.ukey}`} onChange={handleFilterChangeCheckbox} />
              <label htmlFor={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>{r}</label>
            </div>
          })
          )}
          { props.filterValues.length > slice_value  && props.filterValues.sort().slice(slice_value, props.filterValues.length).map(function(r, i){
            return <>
              <div className="collapse collapse-content" id="showMoreOptionCollapse" key={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>
                <div className="custom-checkbox">
                  <input type="checkbox" id={`value-${r}-${props.filterName}-${i}-${props.ukey}`} onChange={handleFilterChangeCheckbox} />
                  <label htmlFor={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>{r}</label>
                </div>{/* end custom-checkbox */}
              </div>
            </>
          })}
          { props.filterValues.length > slice_value && <>
              <a className="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollapse" role="button" aria-expanded="false" aria-controls="showMoreOptionCollapse">
                <span className="collapse-btn-hide">Show More <i className="la la-plus ml-1" /></span>
                <span className="collapse-btn-show">Show Less <i className="la la-minus ml-1" /></span>
              </a>
            </>
          }
      </div>
      }
      { props.filterType === "singleselect" &&
      <div className="radio-wrap">
          { props.filterValues.length > slice_value ? (props.filterValues.sort().slice(0, slice_value).map(function(r, i){
            return <div className="custom-radio" key={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>
              <input type="radio" name={`value-${props.ukey}`} id={`value-${r}-${props.filterName}-${i}-${props.ukey}`} onChange={handleFilterChangeRadio} />
              <label htmlFor={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>{r}</label>
            </div>
          })
          ) : (props.filterValues.sort().map(function(r, i){
            return <div className="custom-checkbox" key={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>
              <input type="radio" name={`value-${props.ukey}`} id={`value-${r}-${props.filterName}-${i}-${props.ukey}`} onChange={handleFilterChangeRadio} />
              <label htmlFor={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>{r}</label>
            </div>
          })
          )}
          { props.filterValues.length > slice_value  && props.filterValues.sort().slice(slice_value, props.filterValues.length).map(function(r, i){
            return <>
              <div className="collapse collapse-content" id="showMoreOptionCollapse" key={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>
                <div className="custom-radio">
                  <input type="radio" name={`value-${props.ukey}`} id={`value-${r}-${props.filterName}-${i}-${props.ukey}`} onChange={handleFilterChangeRadio} />
                  <label htmlFor={`value-${r}-${props.filterName}-${i}-${props.ukey}`}>{r}</label>
                </div>{/* end custom-radio */}
              </div>
            </>
          })}
          { props.filterValues.length > slice_value && <>
              <a className="collapse-btn" data-toggle="collapse" href="#showMoreOptionCollapse" role="button" aria-expanded="false" aria-controls="showMoreOptionCollapse">
                <span className="collapse-btn-hide">Show More <i className="la la-plus ml-1" /></span>
                <span className="collapse-btn-show">Show Less <i className="la la-minus ml-1" /></span>
              </a>
            </>
          }
      </div>
      }
    </div>
  )
}

export default ArenaDetailsFilter;
