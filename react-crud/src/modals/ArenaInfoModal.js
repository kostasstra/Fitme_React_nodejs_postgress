// Imports
import React from "react";
import '../components/css/Rating.css'
// Component Imports
import StarRating from "../components/StarRating";

function ArenaInfoModal(props)  {

  const handleBookingButtonClick = (event) => {
    event.preventDefault();
    props.setActiveModal("booking");
  }

  return (
    <div className="modal fade hide modal-container signup-form info-arena-modal"  tabIndex= "-1" style={{overflowY: "auto" }} tabIndex= "-1"  role="dialog" aria-labelledby="signUpModalTitle" aria-hidden="true">
      <div class=" modal-dialog-centered  role=document" style={{width:"65%", margin: "auto", marginTop: "5%", paddingBottom: "50%"}}>
        <div className="modal-content">
          <div className="modal-header align-items-center mh-bg-2">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" className="la la-times-circle" />
            </button>
          </div>
          <div className="modal-body user-action-meta">
          <div className="input-box py-4 user-action-meta"/>
          <span className=" form-icon" />   
  {/* ================================
 START BLOG AREA
================================= */}
  <section className="blog-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="card-item single-card">
            <div className="card-image after-none">
              <div className="single-slider owl-trigger-action owl-trigger-action-3">
                <div className="single-slider-item">
                  <img
                    src="images/img34.jpg"
                    className="card__img"
                    alt="blog image"
                  />
                </div>
                
              </div>
            </div>{/* end card-image */}
            <div className="card-content">
              <h4 className="card-title font-size-25 mb-0">
                Γήπεδο Μπάσκετ ΑΟΝΑ 
              </h4>
              <div className="d-flex flex-wrap align-items-center pt-3">
                <a
                  href="#"
                  className="d-flex align-items-center text-gray mr-3"
                >
                  <div className="user-thumb user-thumb-sm d-inline-block mr-2">
                    <img src="images/avatar-img.jpg" alt="author-img" />
                  </div>
                  <span className="font-weight-medium">By Alex Smith</span>
                </a>
                <ul className="listing-meta d-flex align-items-center pt-0">
                  <li className="mr-3">
                    <i className="la la-calendar mr-1" />
                    July 28, 2020
                  </li>
                  <li className="mr-3">
                    <i className="la la-tags mr-1" />
                    <a href="#" className="listing-cat-link">
                      Travel
                    </a>
                    ,
                    <a href="#" className="listing-cat-link">
                      News
                    </a>
                  </li>
                  <li className="mr-3">
                    <i className="la la-comment mr-1" />
                    <a href="#" className="listing-cat-link">
                      5 Comments
                    </a>
                  </li>
                  <li>
                    <i className="la la-share-alt mr-1" />
                    <a href="#" className="listing-cat-link">
                      55 Share
                    </a>
                  </li>
                </ul>
              </div>
              <p className="card-sub mt-3">
                Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa.
                Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed
                augue. Curabitur quis lectus quis augue dapibus facilisis.
                Vivamus tincidunt orci est, in vehicula nisi eleifend ut.
                Vestibulum sagittis varius orci vitae.
              </p>
              <p className="card-sub mt-3">
                Curabitur quis lectus quis augue dapibus facilisis. Vivamus
                tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum
                sagittis varius orci vitae.
              </p>
              <p className="card-sub">
                Nulla tristique mi a massa convallis cursus. Nulla eu mi magna.
                Etiam suscipit commodo gravida. Cras suscipit, quam vitae
                adipiscing faucibus, risus nibh laoreet odio, a porttitor metus
                eros ut enim. Morbi augue velit, tempus mattis dignissim nec,{" "}
              </p>
              <p className="card-sub mt-3">
                Cras suscipit, quam vitae adipiscing faucibus, risus nibh
                laoreet odio, a porttitor metus eros ut enim. Morbi augue velit,
                tempus mattis dignissim nec,{" "}
              </p>                      
            </div>
            {/* end card-content */}
          </div>
         
         
         
         
         
          <div className="block-card mb-4">
            <div className="block-card-body">
             
            <div className="user-reviews">
  <div className="section-heading pb-1">
    <h2 className="sec__title font-size-24 line-height-30">Reviews</h2>
  </div>
  {/* end section-heading */}
  <div className="comments-list reviews-list">
    <div className="comment">
      <div className="user-thumb user-thumb-lg flex-shrink-0">
        <img src="images/avatar-img.jpg" alt="author-img" />
      </div>
      <div className="comment-body">
        <div className="meta-data d-flex align-items-center justify-content-between">
          <div>
            <h4 className="comment__title">
              <a href="listing-details.html">Kam Lok Restaurant</a>
            </h4>
            <span className="comment__meta">Mark Hardson</span>
          </div>
          <div className="star-rating-wrap text-center">
            <div className="star-rating text-color-5 font-size-18">
              <span>               
                <StarRating/>
              </span>            
            </div>
            <p className="font-size-13 font-weight-medium">04/10/2020</p>
          </div>
        </div>
      
         

                    <p className="comment-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Animi at aut consequuntur debitis dicta dolor ducimus eaque eum, illo ipsa labore
                       </p>




       
        <div className="review-photos d-flex flex-wrap align-items-center ml-n1">
          <a
            href="images/single-listing-img1.jpg"
            className="d-inline-block"
            data-fancybox="gallery"
          >
        
          </a>
          <a
            href="images/single-listing-img2.jpg"
            className="d-inline-block"
            data-fancybox="gallery"
          >
            
          </a>
        </div>
        {/* end review-photos */}
      </div>
    </div>
    {/* end comment */}
  </div>
</div>









              <div className="text-center">
                <div className="section-pagination">
                  <nav aria-label="Page navigation">
                    <ul className="pagination flex-wrap justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">
                            <i className="la la-arrow-left" />
                          </span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link page-link-active" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="la la-arrow-right" />
                          </span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <p className="font-size-15 text-center pt-1">1 of 5</p>
                </div>
                {/* end section-pagination */}
              </div>
              {/* end text-center*/}
            </div>
            {/* end block-card-body */}
          </div>
          {/* end block-card */}
          <div className="block-card">
            <div className="block-card-header">
              <h2 className="widget-title pb-0">Add a Review</h2>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>
            {/* end block-card-header */}
            <div className="block-card-body">
              <form method="post" className="form-box row">
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Name</label>
                    <div className="form-group">
                      <span className="la la-user form-icon" />
                      <input
                        className="form-control form-control-styled"
                        type="text"
                        name="name"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                </div>
                {/* end col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-box">
                    <label className="label-text">Email</label>
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
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Message</label>
                    <div className="form-group">
                      <span className="la la-pencil form-icon" />
                      <textarea
                        className="message-control form-control"
                        name="message"
                        placeholder="Write message here"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                {/* end col-lg-12 */}
                <div className="col-lg-12">
                  <div className="custom-checkbox mb-4">
                    <input type="checkbox" id="agreeChb2" />
                    <label
                      htmlFor="agreeChb2"
                      className="text-gray font-size-15"
                    >
                      Save my name, email in this browser for the next time I
                      comment.
                    </label>
                  </div>
                </div>
                {/* end col-lg-12 */}
                <div className="col-lg-12">
                  <div className="btn-box pt-1">
                    <button className="theme-btn gradient-btn border-0">
                      Post Comment
                      <i className="la la-arrow-right ml-2" />
                    </button>
                  </div>
                </div>
                {/* end col-lg-12 */}
              </form>
            </div>
            {/* end block-card-body */}
          </div>
          {/* end block-card */}
        </div>
        {/* end col-lg-8 */}
       
        <div className="col-lg-4">
          <div className="sidebar mb-0">
          <button type="button" class="theme-btn gradient-btn border-0 w-100" id="BookingPageArenas" data-toggle="modal"  data-target=".booking" data-dismiss="modal" data-backdrop="true"  onClick={handleBookingButtonClick}>
                        Κάνε Κράτηση <i class="la la-arrow-right ml-2"></i>
                      </button>
                     
  <div className="col-lg-0">
    <div className="sidebar">
      <div className="sidebar-widget">
        <h3 className="widget-title">Στοιχεία Επικοινωνίας</h3>
        <div className="stroke-shape mb-4" />
        <ul className="list-items list--items list--items-2 list-items-style-2">
          <li>
            <span className="text-color mr-1">
              <i className="la la-map-marker mr-2 text-color-2 font-size-18" />
              Διεύθυνση:
            </span>
            Ανεξαρτησίας 87
          </li>
          <li>
            <span className="text-color mr-1">
              <i className="la la-phone mr-2 text-color-2 font-size-18" />
              Phone:
            </span>
            <a href="τλ.:6970938599">6970938599</a>
          </li>
          <li>
            <span className="text-color mr-1">
              <i className="la la-envelope mr-2 text-color-2 font-size-18" />
              Mail:
            </span>
            <a href="mailto:info@fitme.gr">info@fitme.gr</a>
          </li>
          <li>
            <span className="text-color mr-1">
              <i className="la la-globe mr-2 text-color-2 font-size-18" />
              Ιστοσελίδα:
            </span>
            <a href="#">www.fitme.gr</a>
          </li>
        </ul>
       
       
      </div>
      {/* end sidebar-widget */}

      <div className="sidebar-widget">
              <h3 className="widget-title">Map</h3>
              <div className="stroke-shape mb-4" />
              <div className="card-item card-item-layout-4 mb-0">
                <h5>tha mpei xarths</h5>
              </div>             
              {/* end card-item */}
            </div>
            {/* end sidebar-widget */}










      <div className="sidebar-widget">
        <h3 className="widget-title">Get in Touch</h3>
        <div className="stroke-shape mb-4" />
        <form method="post" className="form-box">
          <div className="input-box">
            <label className="label-text">Your Name</label>
            <div className="form-group">
              <span className="la la-user form-icon" />
              <input
                className="form-control"
                type="text"
                name="text"
                placeholder="Your name"
              />
            </div>
          </div>
          <div className="input-box">
            <label className="label-text">Your Email</label>
            <div className="form-group">
              <span className="la la-envelope form-icon" />
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="input-box">
            <label className="label-text">Message</label>
            <div className="form-group">
              <span className="la la-pencil form-icon" />
              <textarea
                className="message-control form-control"
                name="message"
                placeholder="Write Message"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="btn-box">
            <button
              type="submit"
              className="theme-btn gradient-btn w-100 border-0"
            >
              Send Message <i className="la la-arrow-right ml-1" />
            </button>
          </div>
        </form>
      </div>
      {/* end sidebar-widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Rating Distribution</h3>
        <div className="stroke-shape mb-4" />
        <ul className="list-items">
          <li>
            <span className="ribbon ribbon-lg mr-1">5 stars</span>{" "}
            <span className="text-color font-weight-semi-bold">18</span>
          </li>
          <li>
            <span className="ribbon ribbon-lg mr-1">4 stars</span>{" "}
            <span className="text-color font-weight-semi-bold">10</span>
          </li>
          <li>
            <span className="ribbon ribbon-lg mr-1">3 stars</span>{" "}
            <span className="text-color font-weight-semi-bold">2</span>
          </li>
          <li>
            <span className="ribbon ribbon-lg mr-1">2 stars</span>{" "}
            <span className="text-color font-weight-semi-bold">2</span>
          </li>
          <li>
            <span className="ribbon ribbon-lg mr-1">1 star</span>{" "}
            <span className="text-color font-weight-semi-bold">2</span>
          </li>
        </ul>
      </div>
      {/* end sidebar-widget */}

    {/* end sidebar-widget */}
 





      <div className="sidebar-widget">
        <h3 className="widget-title">Review Votes</h3>
        <div className="stroke-shape mb-4" />
        <ul className="list-items list--items list-items-style-2">
          <li>
            <i className="la la-thumbs-up mr-1 font-size-18" />
            Useful:{" "}
            <span className="text-color font-weight-semi-bold ml-2">28</span>
          </li>
          <li>
            <i className="la la-smile mr-1 font-size-18" />
            Funny:{" "}
            <span className="text-color font-weight-semi-bold ml-2">20</span>
          </li>
        </ul>
      </div>
      {/* end sidebar-widget */}
    </div>
    {/* end sidebar */}
  </div>
  {/* end col-lg-4 */}


        
        
            
            
            <div className="sidebar-widget">
              <div className="section-tab section-tab-layout-2 mb-4">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="popular-tab"
                      data-toggle="tab"
                      href="#popular"
                      role="tab"
                      aria-controls="popular"
                      aria-selected="true"
                    >
                      Popular
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="recent-tab"
                      data-toggle="tab"
                      href="#recent"
                      role="tab"
                      aria-controls="recent"
                      aria-selected="false"
                    >
                      Recent
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="popular"
                  role="tabpanel"
                  aria-labelledby="popular-tab"
                >
                  <div className="mini-list-card">
                    <div className="mini-list-img">
                      <a href="blog-single.html" className="d-block">
                        <img
                          src="images/single-listing-small-img1.jpg"
                          alt="similar listing image"
                        />
                      </a>
                    </div>
                    {/* end mini-list-img */}
                    <div className="mini-list-body">
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        <a href="#">Tips,</a>
                        <span>,</span>
                        <a href="#">Location</a>
                      </span>
                      <h4 className="mini-list-title">
                        <a href="blog-single.html">
                          Great Experience At MiFost Villa
                        </a>
                      </h4>
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        July 9, 2020
                      </span>
                    </div>
                    {/* end mini-list-body */}
                  </div>
                  {/* end mini-list-card */}
                  <div className="mini-list-card">
                    <div className="mini-list-img">
                      <a href="blog-single.html" className="d-block">
                        <img
                          src="images/single-listing-small-img2.jpg"
                          alt="similar listing image"
                        />
                      </a>
                    </div>
                    {/* end mini-list-img */}
                    <div className="mini-list-body">
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        <a href="#">Culture</a>
                        <span>,</span>
                        <a href="#">Coffee</a>
                        <span>,</span>
                        <a href="#">Shop</a>
                      </span>
                      <h4 className="mini-list-title">
                        <a href="blog-single.html">
                          Coffee On Street &amp; Look Super Car
                        </a>
                      </h4>
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        July 9, 2020
                      </span>
                    </div>
                    {/* end mini-list-body*/}
                  </div>
                  {/* end mini-list-card */}
                  <div className="mini-list-card">
                    <div className="mini-list-img">
                      <a href="blog-single.html" className="d-block">
                        <img
                          src="images/single-listing-small-img3.jpg"
                          alt="similar listing image"
                        />
                      </a>
                    </div>
                    {/* end mini-list-img */}
                    <div className="mini-list-body">
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        <a href="#">Culture</a>
                        <span>,</span>
                        <a href="#">Travel</a>
                      </span>
                      <h4 className="mini-list-title">
                        <a href="blog-single.html">Discover Venice, Italy</a>
                      </h4>
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        July 9, 2020
                      </span>
                    </div>
                    {/* end mini-list-body*/}
                  </div>
                  {/* end mini-list-card */}
                </div>
                <div
                  className="tab-pane fade"
                  id="recent"
                  role="tabpanel"
                  aria-labelledby="recent-tab"
                >
                  <div className="mini-list-card">
                    <div className="mini-list-img">
                      <a href="blog-single.html" className="d-block">
                        <img
                          src="images/single-listing-small-img3.jpg"
                          alt="similar listing image"
                        />
                      </a>
                    </div>
                    {/* end mini-list-img */}
                    <div className="mini-list-body">
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        <a href="#">Culture</a>
                        <span>,</span>
                        <a href="#">Travel</a>
                      </span>
                      <h4 className="mini-list-title">
                        <a href="blog-single.html">Discover Venice, Italy</a>
                      </h4>
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        July 9, 2020
                      </span>
                    </div>
                    {/* end mini-list-body*/}
                  </div>
                  {/* end mini-list-card */}
                  <div className="mini-list-card">
                    <div className="mini-list-img">
                      <a href="blog-single.html" className="d-block">
                        <img
                          src="images/single-listing-small-img2.jpg"
                          alt="similar listing image"
                        />
                      </a>
                    </div>
                    {/* end mini-list-img */}
                    <div className="mini-list-body">
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        <a href="#">Culture</a>
                        <span>,</span>
                        <a href="#">Coffee</a>
                        <span>,</span>
                        <a href="#">Shop</a>
                      </span>
                      <h4 className="mini-list-title">
                        <a href="blog-single.html">
                          Coffee On Street &amp; Look Super Car
                        </a>
                      </h4>
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        July 9, 2020
                      </span>
                    </div>
                    {/* end mini-list-body*/}
                  </div>
                  {/* end mini-list-card */}
                  <div className="mini-list-card">
                    <div className="mini-list-img">
                      <a href="blog-single.html" className="d-block">
                        <img
                          src="images/single-listing-small-img1.jpg"
                          alt="similar listing image"
                        />
                      </a>
                    </div>
                    {/* end mini-list-img */}
                    <div className="mini-list-body">
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        <a href="#">Tips,</a>
                        <span>,</span>
                        <a href="#">Location</a>
                      </span>
                      <h4 className="mini-list-title">
                        <a href="blog-single.html">
                          Great Experience At MiFost Villa
                        </a>
                      </h4>
                      <span className="category-link after-none pl-0 font-size-14 font-weight-medium">
                        July 9, 2020
                      </span>
                    </div>
                    {/* end mini-list-body */}
                  </div>
                  {/* end mini-list-card */}
                </div>
              </div>
            </div>
            {/* end sidebar-widget */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Follow &amp; Connect</h3>
              <div className="stroke-shape mb-4" />
              <div className="icon-block-wrap d-flex flex-wrap align-items-center ml-n1">
                <a
                  href="#"
                  className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2"
                >
                  <span className="icon-element icon-element-sm f-bg-rgb">
                    <i className="la la-facebook" />
                  </span>
                  <div className="pl-2 flex-grow-1">
                    <span className="text-color font-weight-bold font-size-17 d-block line-height-20">
                      9,809
                    </span>
                    <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">
                      Followers
                    </span>
                  </div>
                </a>
                {/* end icon-block */}
                <a
                  href="#"
                  className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2"
                >
                  <span className="icon-element icon-element-sm t-bg-rgb">
                    <i className="la la-twitter" />
                  </span>
                  <div className="pl-2 flex-grow-1">
                    <span className="text-color font-weight-bold font-size-17 d-block line-height-20">
                      789
                    </span>
                    <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">
                      Followers
                    </span>
                  </div>
                </a>
                {/* end icon-block */}
                <a
                  href="#"
                  className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2"
                >
                  <span className="icon-element icon-element-sm i-bg-rgb">
                    <i className="la la-instagram" />
                  </span>
                  <div className="pl-2 flex-grow-1">
                    <span className="text-color font-weight-bold font-size-17 d-block line-height-20">
                      12,809
                    </span>
                    <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">
                      Followers
                    </span>
                  </div>
                </a>
                {/* end icon-block */}
                <a
                  href="#"
                  className="icon-block d-flex align-items-center flex-grow-1 hover-scale-2"
                >
                  <span className="icon-element icon-element-sm y-bg-rgb">
                    <i className="la la-youtube" />
                  </span>
                  <div className="pl-2 flex-grow-1">
                    <span className="text-color font-weight-bold font-size-17 d-block line-height-20">
                      20,876
                    </span>
                    <span className="text-gray font-weight-medium font-size-13 d-block line-height-20">
                      Subscriber
                    </span>
                  </div>
                </a>
                {/* end icon-block */}
              </div>
              {/* end icon-block-wrap */}
            </div>
            {/* end sidebar-widget */}
            <div className="sidebar-widget">
              <h3 className="widget-title">Hosted by</h3>
              <div className="stroke-shape mb-4" />
              <div className="hosted-by d-flex align-items-center">
                <a
                  href="user-profile.html"
                  className="user-thumb user-thumb-md flex-shrink-0 mr-3"
                >
                  <img src="images/avatar-img.jpg" alt="author-img" />
                </a>
                <div>
                  <h4 className="font-size-18">
                    <a href="user-profile.html" className="text-color">
                      Mark Hardson
                    </a>
                  </h4>
                  <span className="font-size-13 text-gray font-weight-medium d-block line-height-22">
                    20 listing hosted
                  </span>
                </div>
              </div>
              <ul className="list-items py-4">
                <li>
                  <i className="la la-phone mr-2 text-color-2 font-size-18" />
                  <a href="#" className="before-none">
                    + 61 23 8093 3400
                  </a>
                </li>
                <li>
                  <i className="la la-envelope mr-2 text-color-2 font-size-18" />
                  <a href="#" className="before-none">
                    listhub@gmail.com
                  </a>
                </li>
              </ul>
              <div className="btn-box">
                <a
                  href="user-profile.html"
                  className="theme-btn gradient-btn w-100"
                >
                  <i className="la la-user mr-2" />
                  View Profile
                </a>
              </div>
            </div>
            {/* end sidebar-widget */}
          </div>
          {/* end sidebar */}
        </div>
        {/* end col-lg-4 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/* end blog-area */}
  {/* ================================
 START BLOG AREA
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
 
        

         
          <div class="modal hide fade modal-container login-form" id="loginModal" tabIndex="-1"   role="dialog" aria-labelledby="loginModalTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header align-items-center mh-bg">
                  <h5 class="modal-title" id="loginModalTitle">Hey, Welcome back!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="la la-times-circle" modal-backdrop="false"></span>
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

export default ArenaInfoModal;
