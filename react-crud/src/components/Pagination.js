// Imports
import React, { useEffect, useState } from "react";

function Pagination(props)  {
  // State related variables
  const [numberOfPages, setNumberOfPages] = useState();

  const numberOfResultsPerPage = props.numberOfResultsPerPage;

  const getNumberOfPages = (resultsCount) => {
    const numberOfPages = Math.ceil(resultsCount / numberOfResultsPerPage);
    return numberOfPages;
  } 

  const getPageNumbersList = () => {
    let pageNumbersList = [];
    for (var i = 0; i < numberOfPages; i++) {
      let pageNumber = i + 1;
      pageNumbersList.push(
        <li className="page-item" key={pageNumber}>
          <a 
            className={(pageNumber === props.activePage) ? ("page-link page-link-active") : ("page-link")} 
            href="/#" 
            onClick={handlePageNumberClick}>
            {pageNumber}
          </a>
        </li>
      );
    }
    return pageNumbersList;
  }

  const handlePreviousPageClick = (event) => {
    event.preventDefault();
    const prevPage = props.activePage - 1;
    if (prevPage >= 1){
      props.setActivePage(prevPage);
    }
  }

  const handleNextPageClick = (event) => {
    event.preventDefault();
    const nextPage = props.activePage + 1;
    if (nextPage <= numberOfPages){
      props.setActivePage(nextPage);
    }
  }

  const handlePageNumberClick = (event) => {
    event.preventDefault();
    const numberClicked = parseInt(event.target.innerText);
    props.setActivePage(numberClicked);
  }

  const handleFirstPageClick = (event) => {
    event.preventDefault();
    props.setActivePage(1);
  }

  const handleLastPageClick = (event) => {
    event.preventDefault();
    props.setActivePage(numberOfPages);
  }

  useEffect(() => { 
    setNumberOfPages(getNumberOfPages(props.resultsCount))
  }, [props.resultsCount]); 


  return (
    <div className="pagination-wrapper d-inline-block">
      <div className="section-pagination">
        <nav aria-label="Page navigation">
          <ul className="pagination flex-wrap justify-content-center">
            <li className="page-item">
              <a className="page-link" href="/#" aria-label="Previous" onClick={handlePreviousPageClick}>
                <span aria-hidden="true"><i className="la la-angle-left" /></span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            { props.resultsCount ? ( getPageNumbersList(props.resultsCount) ) : ( "Loading..." ) }
            <li className="page-item">
              <a className="page-link" href="/#" aria-label="Next" onClick={handleNextPageClick}>
                <span aria-hidden="true"><i className="la la-angle-right" /></span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="pagination-simple d-flex align-items-center justify-content-center pt-3">
        <li className="mr-4">
          <a 
            href="/#" 
            className="pagination-simple-nav first-nav" 
            className={props.activePage ===  1 ? "pagination-simple-nav first-nav" : "pagination-simple-nav first-nav active"} 
            onClick={handleFirstPageClick}
          >
            <i className="la la-long-arrow-left mr-1" />
            First
          </a>
        </li>
        <li>
          <a 
            href="/#" 
            className={props.activePage ===  numberOfPages ? "pagination-simple-nav last-nav" : "pagination-simple-nav last-nav active"} 
            onClick={handleLastPageClick}
          >
            Last
            <i className="la la-long-arrow-right ml-1" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
