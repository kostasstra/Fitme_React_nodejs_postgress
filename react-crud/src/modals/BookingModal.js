// Imports
import React from "react";

function BookingModal(props)  {

  const handleBackButtonClick = (event) => {
    event.preventDefault();
    props.setActiveModal("infoarenas");
  }

  const handleBookingConfirmationButtonClick = (event) => {
    event.preventDefault();   
    props.setActiveModal("confirmation");
  }

  return (

         <div className="modal fade hide modal-container booking disable-scrollbars" style={{overflowY: "auto" }} tabIndex= "-1" role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
            <div className=" modal-dialog-centered  role=document" style={{width:"65%", margin: "auto", marginTop: "5%", paddingBottom: "50%"}}>
              <div className="modal-content">
                <div className="modal-header align-items-center mh-bg-2">
                    <button className="theme-btn gradient-btn border-0 shadow-none hide" type="button" data-toggle="modal" data-backdrop="true" data-dismiss="modal" data-target=".info-arena-modal" onClick={handleBackButtonClick}><i className="la la-arrow-left ml-0" /> Πίσω 
                    </button>
                      
                      <h5 className="modal-title" id="signUpModalTitle">Πληροφορίες</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true" className="la la-times-circle"/>
                    </button>
                </div>
                <div className="modal-body user-action-meta">
                 <div className="input-box py-4 user-action-meta"/>
                   <span className=" form-icon" />
          
                   <>
  
  {/* ================================
    START BOOKING AREA
================================= */}
  <section className="booking-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="block-card mb-4">
            <div className="block-card-header">
              <h3 className="widget-title">Personal Details</h3>
              <div className="stroke-shape" />
            </div>
            {/* block-card-header */}
            <div className="block-card-body">
              <form method="post" className="form-box row">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">First Name</label>
                    <div className="form-group">
                      <span className="la la-user form-icon" />
                      <input
                        className="form-control form-control-styled"
                        type="text"
                        name="text"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Last Name</label>
                    <div className="form-group">
                      <span className="la la-user form-icon" />
                      <input
                        className="form-control form-control-styled"
                        type="text"
                        name="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Email Address</label>
                    <div className="form-group">
                      <span className="la la-envelope-o form-icon" />
                      <input
                        className="form-control form-control-styled"
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Phone</label>
                    <div className="form-group">
                      <span className="la la-phone form-icon" />
                      <input
                        className="form-control form-control-styled"
                        type="text"
                        name="text"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
              </form>
            </div>
            {/* end block-card-body */}
          </div>
          {/* end block-card */}
          <div className="block-card">
            <div className="block-card-header ">
              <h3 className="widget-title">Select Payment Method</h3>
              <div className="stroke-shape" />
            </div>
            {/* block-card-header */}
            <div className="block-card-body">
              <div className="payment-option-wrap">
                <div className="payment-tab is-active">
                  <div className="payment-tab-toggle">
                    <input
                      defaultChecked=""
                      id="bankTransfer"
                      name="radio"
                      type="radio"
                      defaultValue="bankTransfer"
                    />
                    <label htmlFor="bankTransfer">Direct Bank Transfer</label>
                  </div>
                  <div className="payment-tab-content">
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      won’t be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                {/* end payment-tab */}
                <div className="payment-tab">
                  <div className="payment-tab-toggle">
                    <input
                      id="paypal"
                      name="radio"
                      type="radio"
                      defaultValue="paypal"
                    />
                    <label htmlFor="paypal">PayPal</label>
                    <img
                      className="payment-logo"
                      src="images/paypal.png"
                      alt=""
                    />
                  </div>
                  <div className="payment-tab-content">
                    <p>
                      In order to complete your transaction, we will transfer
                      you over to PayPal's secure servers.
                    </p>
                  </div>
                </div>
                {/* end payment-tab */}
                <div className="payment-tab ">
                  <div className="payment-tab-toggle">
                    <input
                      type="radio"
                      name="radio"
                      id="creditCart"
                      defaultValue="creditCard"
                    />
                    <label htmlFor="creditCart">Credit / Debit Card</label>
                    <img
                      className="payment-logo"
                      src="images/payment-img.png"
                      alt=""
                    />
                  </div>
                  <div className="payment-tab-content">
                    <form action="#" className="form-box row">
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text">Name on Card</label>
                          <div className="form-group">
                            <input
                              className="form-control form-control-styled pl-3"
                              type="text"
                              name="text"
                              required=""
                              placeholder="Card Name"
                            />
                          </div>
                        </div>
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="input-box">
                          <label className="label-text">Card Number</label>
                          <div className="form-group">
                            <input
                              className="form-control form-control-styled pl-3"
                              type="text"
                              name="text"
                              required=""
                              placeholder="1234  5678  9876  5432"
                            />
                          </div>
                        </div>
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-4">
                        <div className="input-box">
                          <label className="label-text">Expiry Month</label>
                          <div className="form-group">
                            <input
                              className="form-control form-control-styled pl-3"
                              type="text"
                              name="text"
                              required=""
                              placeholder="MM"
                            />
                          </div>
                        </div>
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="input-box">
                          <label className="label-text">Expiry Year</label>
                          <div className="form-group">
                            <input
                              className="form-control form-control-styled pl-3"
                              type="text"
                              name="text"
                              required=""
                              placeholder="YY"
                            />
                          </div>
                        </div>
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="input-box">
                          <label className="label-text">CVV</label>
                          <div className="form-group">
                            <input
                              className="form-control form-control-styled pl-3"
                              type="text"
                              name="text"
                              required=""
                              placeholder="cvv"
                            />
                          </div>
                        </div>
                      </div>
                      {/* end col-lg-4 */}
                    </form>
                  </div>
                </div>
                {/* end payment-tab */}
              </div>
              {/* end payment-option-wrap */}
              <div className="btn-box pt-3">
                <a
                  href="booking-confirmation.html"
                  className="theme-btn gradient-btn"
                >
                 <a href="booking-confirmation.html" className="theme-btn gradient-btn" data-toggle="modal" data-dismiss="modal" data-backdrop="true" data-dismiss="modal" data-target=".confirmation" onClick={handleBookingConfirmationButtonClick}>Ολοκλήρωσε την κρατησή σου<i className="la la-arrow-right ml-2" /></a>
                </a>
              </div>
            </div>
            {/* end block-card-body */}
          </div>
          {/* end block-card */}
        </div>
        {/* end col-lg-8 */}
        <div className="col-lg-4">
          <div className="card-item">
            <div className="card-image">
              <a href="listing-details.html" className="d-block">
                <img
                  src="images/img-loading.png"
                  data-src="images/img1.jpg"
                  className="card__img lazy"
                  alt=""
                />
              </a>
            </div>
            <div className="card-content">
              <a
                href="#"
                className="user-thumb d-inline-block"
                data-toggle="tooltip"
                data-placement="top"
                title="TechyDevs"
              >
                <img src="images/photoshop.png" alt="author-img" />
              </a>
              <h4 className="card-title pt-3">
                <a href="listing-details.html">Roma’s Ristorante Italiano</a>
                <i
                  className="la la-check-circle ml-1"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Claimed"
                />
              </h4>
              <p className="card-sub">
                <a href="#">
                  <i className="la la-map-marker mr-1 text-color-2" />
                  Bishop Avenue, New York
                </a>
              </p>
              <ul className="listing-meta d-flex align-items-center">
                <li className="d-flex align-items-center">
                  <span className="rate flex-shrink-0">4.7</span>
                  <span className="rate-text">5 reviews</span>
                </li>
                <li>
                  <span
                    className="price-range"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Pricey"
                  >
                    <strong className="font-weight-medium">$</strong>
                    <strong className="font-weight-medium">$</strong>
                    <strong className="font-weight-medium">$</strong>
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="la la-cutlery mr-1 listing-icon" />
                  <a href="#" className="listing-cat-link">
                    Restaurant
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* end card-item */}
          <div className="block-card">
            <div className="block-card-header">
              <h3 className="widget-title">Booking Summary</h3>
              <div className="stroke-shape" />
            </div>
            {/* block-card-header */}
            <div className="block-card-body">
              <div className="booking-summary">
                <ul className="list-items list--items">
                  <li>
                    <span className="text-color">Date:</span> 12/03/2020
                  </li>
                  <li>
                    <span className="text-color">Hour:</span> 6:30 PM
                  </li>
                  <li>
                    <span className="text-color">Guests:</span>4
                  </li>
                </ul>
                <div className="section-block-2 my-3" />
                <h3 className="widget-title d-flex align-items-center justify-content-between font-size-16 pb-0">
                  Total Cost:{" "}
                  <span className="text-color-2 font-weight-semi-bold">
                    $11.00
                  </span>
                </h3>
                <div className="section-block-2 my-3" />
                <div className="coupon-widget">
                  <form method="post" className="form-box">
                    <div className="input-box">
                      <label className="label-text">
                        Do you have coupon code?
                      </label>
                      <div className="form-group mb-0">
                        <input
                          className="form-control pl-3"
                          type="text"
                          name="name"
                          placeholder="Enter code"
                        />
                        <button
                          className="theme-btn gradient-btn border-0 shadow-none"
                          type="submit"
                        >
                          Apply <i className="la la-arrow-right ml-1" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* end booking-summary */}
            </div>
            {/* end block-card-body */}
          </div>
          {/* end block-card */}
        </div>
        {/* end col-lg-4 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/* end booking-area*/}
  {/* ================================
    END BOOKING AREA
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




        
     
                    <div className="modal fade hide modal-container  " tabIndex= "-1"  role="dialog" aria-labelledby="recoverModalTitle" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered " role="document"  >                
                    
               
            
                      </div> 
                    </div>
                 </div>
                </div>
           </div>
         </div>

          
          





    );
  }


export default BookingModal;
