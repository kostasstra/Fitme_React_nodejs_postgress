// Imports
import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom";
// Component Imports
import ArenaDetailsFilter from "./ArenaDetailsFilter";
import Pagination from "./Pagination";
// Modal Imports
import SearchModal from "../modals/SearchModal";

function SearchResults(props)  {
  // State related variables
  const [activePage, setActivePage] = useState(1);
  const [arenaDetailsForSport, setArenaDetailsForSport] = useState([]);
  const [filters, setFilters] = useState({});
  const [fromNumber, setFromNumber] = useState();
  const [pageSize, setPageSize] = useState(6);
  const [results, setResults] = useState();
  const [resultsCount, setResultsCount] = useState();
  const [toNumber, setToNumber] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  const getResultsUrl = () => {
    let defaultSearchQueryParams = "";
    let sizingQueryParams;

    const area = searchParams.get("area");
    const sport = searchParams.get("sport");
    const type = searchParams.get("type");
    const search_api = "/api/search/getSearchResultsHome?";

    if (area && ! (area === "null")) {
      defaultSearchQueryParams = defaultSearchQueryParams + "area=" + area;
    }

    if (type && ! (type === "null")) {
      defaultSearchQueryParams = defaultSearchQueryParams + "&type=" + type;
    }

    defaultSearchQueryParams = defaultSearchQueryParams + "&sport=" + sport;
    
    if (filters) {
      sizingQueryParams = "&page=" + activePage + "&size=" + pageSize + "&arena_details=" + JSON.stringify(filters);
    } else {
      sizingQueryParams = "&page=" + activePage + "&size=" + pageSize;
    }

    return search_api + defaultSearchQueryParams + sizingQueryParams;
  }
   
  const handleArenaClick = (arena) => {
    props.setSelectedArena(arena);
    props.setActiveModal("infoarenas");
  }

  const setFromToResultsNumbers = (page, size, count) => {
    let from, to;
    from = (size * (page - 1)) + 1;
    to = (from + size <= count) ? from + size - 1 : count ;
    setFromNumber(from);
    setToNumber(to);
  }

  useEffect(() => {
    const results_url = getResultsUrl();
    const fetchResults = async () => {
      await fetch(results_url, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(res => res.json())
        .then(data => {
          setResultsCount(data.count);
          setResults(data.rows);
          if (data.count > 0) {
            let newArenaDetails = props.arenaDetails.filter(e => e["sport_id"] === data.rows[0]["sport_id"])[0]["arena_details"];
            setArenaDetailsForSport(newArenaDetails);
          }
      })
    }
    fetchResults();
  }, [activePage, filters]);

  useEffect(() => {
    if (resultsCount > 0) {
      setFromToResultsNumbers(activePage, pageSize, resultsCount);
    }  
  }, [activePage, resultsCount, results]);

  return (
    <>
      {<SearchModal />}
      <section className="card-area section-padding ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-bar d-flex flex-wrap justify-content-between align-items-center margin-bottom-30px margin-top-60px">
                <p className="result-text font-weight-medium">
                {(resultsCount && resultsCount > 0) ? `Showing ${fromNumber} to ${toNumber} of ${resultsCount}` : ""}
                </p>
                <div className="filter-bar-action d-flex flex-wrap align-items-center">
                  <a href="/#" className="search-filter" data-toggle="modal" data-target="#searchFilterModal">
                    <i className="la la-sliders mr-1" />Detailed Search
                  </a>
                  <div className="user-chosen-select-container ml-3">
                    <select className="user-chosen-select">
                      <option value="sort-by-default">Sort by default</option>
                      <option value="high-rated">High Rated</option>
                    </select>
                  </div>
                  <ul className="filter-nav ml-1">
                    <li><a href="listing-grid.html" data-toggle="tooltip" data-placement="top" title="Grid View" className="active"><span className="la la-th-large" /></a></li>
                    <li><a href="listing-list.html" data-toggle="tooltip" data-placement="top" title="List View"><span className="la la-list" /></a></li>
                  </ul>
                </div>{/* end filter-bar-action */}
              </div>{/* end filter-bar */}
            </div>{/* end col-lg-12 */}
            <div className="col-lg-4">
              <div className="sidebar mt-0">
                <div className="sidebar-widget">           
                  <div className="btn-box">                         
                    <button className="theme-btn gradient-btn border-0 w-100 mt-3"  data-toggle="modal"  data-backdrop="true" data-target=".modalsearch">
                      <i className="la la-search mr-2" />Νέα Αναζήτηση
                    </button>
                  </div>{/* end btn-box */}
                </div>{/* end sidebar-widget */}
                {! props.arenaDetails ? ("Loading Results...") : (
                  arenaDetailsForSport.map(function(r, i){
                    return <ArenaDetailsFilter 
                        filterName={r.name} 
                        filterValues={r.values}
                        filterType={r.arena_details_type}
                        filters={filters}
                        setFilters={setFilters} 
                        ukey={i}
                    />
                  })
                )}
              </div>{/* end sidebar */}
            </div>{/* end col-lg-4 */}
            <div className="col-lg-8">
            {! results ? ("Results Loading..."): (
                  <div className="row">
                    {! (resultsCount > 0) ? "No Results Found" : (
                      results.map(function(r, i){
                        return  <div className="col-lg-6 responsive-column" key={i + "-" + r.arena_name.toLowerCase()}>
                          <div className="card-item">
                            <div className="card-image">
                              <a href="listing-details.html" className="d-block">
                                <img src="images/img-loading.png" data-src="images/img4.jpg" className="card__img lazy" alt="" />
                                <span className="badge">now open</span>
                              </a>
                              <span className="bookmark-btn" data-toggle="tooltip" data-placement="top" title="Save">
                                <i className="la la-bookmark" />
                              </span>
                            </div>
                            <div className="card-content">
                              <a href="/#" className="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                                <img src="images/listing-logo.jpg" alt="author-img" />
                              </a>
                              <h4 className="card-title pt-3">
                                <a href="listing-details.html" data-toggle="modal"  data-backdrop="true" data-target=".info-arena-modal" onClick={() =>handleArenaClick(r)} >{r.arena_name}</a>
                                <i className="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed" />
                              </h4>
                              <p className="card-sub"><a href="/#"><i className="la la-map-marker mr-1 text-color-2" />{r["SportCenter.address"]}, {r["SportCenter.postal_code"]}</a></p>
                              <ul className="listing-meta d-flex align-items-center">
                                <li className="d-flex align-items-center">
                                  <span className="rate flex-shrink-0">4.7</span>
                                  <span className="rate-text">5 Ratings</span>
                                </li>
                                <li>
                                  <span className="price-range" data-toggle="tooltip" data-placement="top" title="Pricey">
                                    <strong className="font-weight-medium">$</strong>
                                    <strong className="font-weight-medium">$</strong>
                                    <strong className="font-weight-medium">$</strong>
                                  </span>
                                </li>
                                <li className="d-flex align-items-center">
                                  <i className="la la-cutlery mr-1 listing-icon" /><a href="/#" className="listing-cat-link">Restaurant</a>
                                </li>
                              </ul>
                              <ul className="info-list padding-top-20px">
                                <li><span className="la la-link icon" />
                                  <a href="/#"> {r["SportCenter.phone_number"]}</a>
                                </li>
                                <li><span className="la la-calendar-check-o icon" />
                                  Opened 1 month ago
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      })
                    )}
                  </div>
            )}
              <div className="row">
                <div className="col-lg-12 pt-3 text-center">
                  {! (resultsCount && resultsCount > 0) ? "" : (
                    <Pagination
                      activePage={activePage}
                      numberOfResultsPerPage={pageSize}
                      results={results} 
                      resultsCount={resultsCount}
                      setActivePage={setActivePage} 
                    />
                  )}
                </div>{/* end col-lg-12 */}
              </div>{/* end row */}
            </div>{/* end col-lg-8 */}
          </div>{/* end row */}
        </div>{/* end container */}
      </section>{/* end card-area */}
    </>
  );
}

export default SearchResults;
