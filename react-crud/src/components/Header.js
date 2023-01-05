// Imports
import React, { useEffect, useState } from "react";

function Header(props)  {
  // State related variables
  const [logoutEvent, setLogoutEvent] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogoutClick = () => {
    localStorage.clear();
    setLogoutEvent(true);
    props.setIsLoggedIn(false);
  }

  useEffect(() => {
    setUserName(localStorage.getItem("user"));
    if (! props.isLoggedIn) {
      handleLogoutClick()
    }
  }, [userName, logoutEvent, props.isLoggedIn]);

  return (
    <header className="header-area">
      <div className="header-top-bar bg-dark py-2 padding-right-30px padding-left-30px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center header-top-info font-size-14 font-weight-medium">
              <p className="login-and-signup-wrap">
                {props.isLoggedIn && <a href="/#" data-toggle="modal" onClick={handleLogoutClick}>
                  <span className="mr-1 la la-sign-in" />Logout
                </a>}
                {! props.isLoggedIn && <a href="/#" data-toggle="modal" data-target="#loginModal">
                  <span className="mr-1 la la-sign-in" />Login
                </a>}
                {! props.isLoggedIn && <span className="or-text px-2">or</span>}
                {! props.isLoggedIn && <a href="/#" data-toggle="modal" data-target="#signUpModal">
                  <span className="mr-1 la la-user-plus" />Register
                </a>}
                {props.isLoggedIn && userName && <span className="mr-10 ca">Γειά σου {userName}!</span>}           
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end header-top-info">
              <span className="mr-2 text-white font-weight-semi-bold font-size-14"></span>
              <ul className="list-items d-flex">
                <li><a href="/#"><i className="lab la-facebook mr-1" />Facebook</a></li>
                <li><a href="/#"><i className="lab la-twitter mr-1" />Twitter</a></li>
                <li><a href="/#"><i className="lab la-instagram mr-1" />Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-menu-wrapper padding-right-0px padding-left-0px">
        <div className="container-fluid ">
          <div className="row">
            <div className="w-100 col-lg-0">
              <div className="menu-full-width ">
                <div className="logo ml-5">
                  <a href="/"><img src="images/logo-white.png" alt="logo" /></a>
                  <div className="d-flex align-items-center">
                    <a href="add-listing.html" className="btn-gray add-listing-btn-show font-size-24 mr-2 flex-shrink-0" data-toggle="tooltip" data-placement="left" title="Add Listing">
                      <i className="la la-plus" />
                    </a>
                    <div className="menu-toggle">
                      <span className="menu__bar" />
                      <span className="menu__bar" />
                      <span className="menu__bar" />
                    </div>
                  </div>
                </div>
                <div className="main-menu-content main-menu-content-2">
                  <nav className="main-menu">
                    <ul>
                      <li>
                        <a href="/#">Αθλήματα<span className="la la-angle-down" /></a>
                        <ul className="dropdown-menu-item">
                          <li><a href="/">Μπάσκετ</a></li>
                          {/* <li><a href="index2.html">home two</a></li>
                          <li><a href="/#">home (Airbnd) <span class="ribbon">Coming</span></a></li> */}
                        </ul>
                      </li>
                      {/* <li>
                        <a href="/#">listings <span className="la la-angle-down" /></a>
                        <ul className="dropdown-menu-item">
                          <li><a href="listing-grid.html">listing grid</a></li>
                        </ul>
                      </li> */}
                      <li>
                        <a href="/#">Νέα<span className="la la-angle-down" /></a>
                        {/* <div className="dropdown-menu-item mega-menu">
                          <ul className="row no-gutters">
                            <li className="col-lg-4 mega-menu-item">
                              <ul>
                                <li><a href="dashboard.html">dashboard <span class="ribbon">Hot</span></a></li>
                              </ul>
                            </li>
                            <li className="col-lg-4 mega-menu-item">
                              <ul>
                                <li><a href="top-author.html">top authors </a></li>
                              </ul>
                            </li>
                            <li className="col-lg-4 mega-menu-item">
                              <ul>
                                 <li><a href="add-new-post.html">add new post </a></li>
                              </ul>
                            </li>
                          </ul>
                        </div> */}
                      </li>
                      <li>
                        <a href="/#">Εκδηλώσεις <span className="la la-angle-down" /></a>
                        {/* <ul className="dropdown-menu-item"> */}
                          {/* <li><a href="blog-full-width.html">full width</a></li> */}
                        {/* </ul> */}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
