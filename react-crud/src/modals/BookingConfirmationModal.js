// Imports
import React from "react";

function BookingConfirmationModal(props)  {

  const handleBackButtonClick = (event) => {
    event.preventDefault();
    props.setActiveModal("booking");
  }

  return (

<div className="modal fade hide modal-container signup-form confirmation"style={{overflowY: "auto"}}  tabIndex="-1"   role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
  <div class=" modal-dialog-centered  role=document" style={{width:"65%", margin: "auto", marginTop: "5%", paddingBottom: "50%"}}>
    <div className="modal-content">
      <div className="modal-header align-items-center mh-bg-2">
                <button className="theme-btn gradient-btn border-0 shadow-none"  type="button" data-toggle="modal" data-backdrop="true"data-dismiss="modal"  data-target=".booking" onClick={handleBackButtonClick} ><i className="la la-arrow-left ml-0" /> Πίσω </button>
                   <h5 className="modal-title" id="signUpModalTitle">Πληροφορίες</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" className="la la-times-circle"/>
               </button>
      </div>
    <div className="modal-body user-action-meta">
  <div className="input-box py-4 user-action-meta"/>
          <span className=" form-icon"/>
          
          <>
  {/* ================================
    START BOOKING CONFIRM AREA
================================= */}
  <section className="booking-confirm-area section-padding position-relative">
    <span className="circle-bg circle-bg-1 position-absolute" />
    <span className="circle-bg circle-bg-2 position-absolute" />
    <span className="circle-bg circle-bg-3 position-absolute" />
    <span className="circle-bg circle-bg-4 position-absolute" />
    <span className="circle-bg circle-bg-5 position-absolute" />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="booking-confirm-content text-center">
            <i className="la la-check-circle-o font-size-90 text-success" />
            <div className="section-heading pt-3">
              <h2 className="sec__title mb-2">
                Thank you. Your reservation <br /> has been received.
              </h2>
              <p className="sec__desc">
                You'll receive a confirmation email at{" "}
                <a href="#" className="text-gray">
                  mail@example.com
                </a>
              </p>
            </div>
            <div className="btn-box padding-top-30px">
              <a
                href="invoice.html"
                className="btn-gray btn-gray-lg px-4"
                target="_blank"
              >
                View Invoice <i className="la la-arrow-right ml-1" />
              </a>
            </div>
          </div>
        </div>
        {/* end col-lg-12 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/* end booking-confirm-area */}
  {/* ================================
    END BOOKING CONFIRM AREA
================================= */}

  {/* start back-to-top */}
  <div id="back-to-top">
    <i className="la la-arrow-up" title="Go top" />
  </div>
  {/* end back-to-top */}
  {/* Modal */}
  <div
    className="modal fade modal-container login-form"
    id="loginModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="loginModalTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header align-items-center mh-bg">
          <h5 className="modal-title" id="loginModalTitle">
            Hey, Welcome back!
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="la la-times-circle" />
          </button>
        </div>
        <div className="modal-body">
          <form method="post" className="form-box">
            <div className="input-box">
              <label className="label-text">Username or email</label>
              <div className="form-group">
                <span className="la la-user form-icon" />
                <input
                  className="form-control form-control-styled"
                  type="text"
                  name="text"
                  placeholder="Username or email address"
                />
              </div>
            </div>
            <div className="input-box">
              <label className="label-text">Password</label>
              <div className="form-group">
                <span className="la la-lock form-icon" />
                <input
                  className="form-control form-control-styled"
                  type="text"
                  name="text"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="input-box d-flex align-items-center justify-content-between pb-4 user-action-meta">
              <div className="custom-checkbox">
                <input type="checkbox" id="keepMeSignedChb" />
                <label htmlFor="keepMeSignedChb" className="font-size-14">
                  Keep me signed in
                </label>
              </div>
              <a
                href="javascript:void(0)"
                className="margin-bottom-10px lost-pass-btn font-size-14"
              >
                Lost Password?
              </a>
            </div>
            <div className="btn-box">
              <button type="submit" className="theme-btn gradient-btn w-100">
                <i className="la la-sign-in mr-1" /> Login to Account
              </button>
              <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                New to Listhub?{" "}
                <a
                  className="text-color-2 signup-btn"
                  href="javascript:void(0)"
                >
                  Create account
                </a>
              </p>
            </div>
            <div className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
              OR
            </div>
            <div className="text-center">
              <p className="font-size-15 font-weight-medium">
                Login with your social network
              </p>
              <ul className="social-profile social-profile-colored py-3">
                <li>
                  <a
                    href="#"
                    className="google-bg mx-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Google"
                  >
                    <i className="lab la-google" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="facebook-bg mx-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <i className="lab la-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="twitter-bg mx-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <i className="lab la-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="instagram-bg mx-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <i className="lab la-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade modal-container signup-form"
    id="signUpModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="signUpModalTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header align-items-center mh-bg-2">
          <h5 className="modal-title" id="signUpModalTitle">
            Welcome! create your listhub account
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="la la-times-circle" />
          </button>
        </div>
        <div className="modal-body">
          <form method="post" className="form-box">
            <div className="input-box">
              <label className="label-text">Username</label>
              <div className="form-group">
                <span className="la la-user form-icon" />
                <input
                  className="form-control form-control-styled"
                  type="text"
                  name="text"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="input-box">
              <label className="label-text">Email</label>
              <div className="form-group">
                <span className="la la-envelope form-icon" />
                <input
                  className="form-control form-control-styled"
                  type="email"
                  name="text"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="input-box">
              <label className="label-text">Password</label>
              <div className="form-group">
                <span className="la la-lock form-icon" />
                <input
                  className="form-control form-control-styled"
                  type="text"
                  name="text"
                  placeholder="Enter password"
                />
              </div>
              <p className="font-size-14 mt-n2">
                Your password must be at least 6 characters long and must
                contain letters, numbers and special characters. Cannot contain
                whitespace.
              </p>
            </div>
            <div className="input-box py-4 user-action-meta">
              <div className="custom-checkbox">
                <input type="checkbox" id="agreeChb" />
                <label htmlFor="agreeChb" className="font-size-14">
                  By signing up, you agree to our{" "}
                  <a href="privacy-policy.html" className="text-color-2">
                    Privacy Policy.
                  </a>
                </label>
              </div>
            </div>
            <div className="btn-box">
              <button type="submit" className="theme-btn gradient-btn w-100">
                <i className="la la-user-plus mr-1" /> Register Account
              </button>
              <p className="sub-text-box text-right pt-1 font-weight-medium font-size-14">
                Already on Listhub?{" "}
                <a className="text-color-2 login-btn" href="javascript:void(0)">
                  Log in
                </a>
              </p>
            </div>
            <div className="icon-element font-size-16 font-weight-semi-bold mt-5 mb-4 mx-auto">
              OR
            </div>
            <div className="text-center">
              <p className="font-size-15 font-weight-medium">
                Connect with social network
              </p>
              <ul className="social-profile social-profile-colored py-3">
                <li>
                  <a
                    href="#"
                    className="google-bg mx-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Google"
                  >
                    <i className="lab la-google" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="facebook-bg mx-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <i className="lab la-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="twitter-bg mx-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <i className="lab la-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="instagram-bg mx-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <i className="lab la-instagram" />
                  </a>
                </li>
              </ul>
              <p className="font-size-15 pb-3">
                Don't worry, we never any post to your social profile.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>
            
        
      </div>
    </div>
  </div>
        
        
                  
        {/* Modal */}
        <div className="modal fade hide modal-container login-form" id="loginModal"   tabIndex="-1"   aria-labelledby="loginModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" className="la la-times-circle" />
                </button>                       
           
          </div>
         </div>
            {/* Modal */}
            
         
              
           
        
</div>
    );
  }

export default BookingConfirmationModal;
