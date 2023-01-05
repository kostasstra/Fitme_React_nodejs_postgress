// Imports
import React from "react";

function Footer() {
  
  return (
    <section className="footer-area bg-gradient-gray padding-top-30px padding-bottom-30px position-relative">
      <span className="circle-bg circle-bg-3 position-absolute" />
      <span className="circle-bg circle-bg-4 position-absolute" />
      <span className="circle-bg circle-bg-5 position-absolute" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cta-content d-flex align-items-center justify-content-between p-0">
              <div className="section-heading">
                <h2 className="sec__title mb-0 font-size-24 line-height-30">Όταν προσπαθείς...μπορείς!</h2>
                <p className="sec__desc font-size-16">Για να ενημερωθείς γράψε το E-mail σου.</p>
              </div>
              <form method="post" className="form-box">
                <div className="form-group mb-0">
                  <span className="la la-envelope-o form-icon" />
                  <input className="form-control form-control-styled form-control-long" type="email" placeholder="Γράψε το Ε-mail σου..." />
                  <p className="font-size-12 font-weight-medium pt-1"><i className="la la-lock mr-1" />Your are 100% protected</p>
                  <button className="theme-btn gradient-btn subscribe-btn input-btn-append border-0" type="submit">Επιβεβαίωσε <i className="la la-arrow-right ml-1" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="section-block-2 margin-top-30px margin-bottom-40px" />
        <div className="row">
        
           <div className="col-lg-3 responsive-column">
            <div className="footer-item">
              <h4 className="footer__title">Contact with Us</h4>
              <div className="stroke-shape mb-3" />
              <ul className="list-items contact-links">
                <li><span className="d-block text-color mb-1"><i className="la la-map mr-1 text-color-2" />Διεύθυνση:</span> 16342 Λ.Δημοκρατίας 33, Ηλιούπολη</li>
                <li><span className="d-block text-color mb-1"><i className="la la-phone mr-1 text-color-2" />Τηλέφωνο:</span><a href="/#">6970938599</a></li>
                <li><span className="d-block text-color mb-1"><i className="la la-envelope mr-1 text-color-2" />E-mail:</span><a href="/#">Info@fitme.gr</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-4 align-items-center footer-action-wrap">
          <div className="col-lg-4 responsive-column">
            <ul className="social-profile social-profile-colored">
              <li><a href="/#" className="facebook-bg"><i className="lab la-facebook-f" /></a></li>
              <li><a href="/#" className="twitter-bg"><i className="lab la-twitter" /></a></li>
              <li><a href="/#" className="instagram-bg"><i className="lab la-instagram" /></a></li>
              <li><a href="/#" className="dribbble-bg"><i className="la la-dribbble" /></a></li>
              <li><a href="/#" className="behance-bg"><i className="lab la-behance" /></a></li>
            </ul>
          </div>
          <div className="col-lg-8">
            <ul className="list-items term-list text-right">
              <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
              <li><a href="privacy-policy.html">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="section-block-2 margin-top-30px margin-bottom-30px" />
        <div className="row">
          <div className="col-lg-12">
            <div className="copy-right d-flex align-items-center justify-content-between">
              <p className="copy__desc">
                © Copyright Fitme . Made with
                <span className="la la-heart-o" /> by <a href="https://themeforest.net/user/techydevs/portfolio">Fitme</a>
              </p>
              
                
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
