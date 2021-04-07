import React from "react";
import "./flat-listing-hero.styles.css";
import Lock from "../../assets/images/lock.svg";
import Globe from "../../assets/images/globe_download.svg";
import Place from "../../assets/images/favorite_place.svg";

const FlatListingHero = () => {
  return (
    <div className="mt-5 flat-hero">
      <div className="container">
        <h3 className="flat-header">
          Simply the perfect flat rental marketplace
        </h3>
        <div className="row flat-card-con mt-5 ">
          <div className="col-sm-4 flat-card">
            <img src={Lock} alt="" className="flat-card-img" />
            <p>Your rental, your way</p>
            <p className="flat-card-text">
              Set your price, dates, rules, and more. We give you the tools to
              make sure you’re in control.
            </p>
          </div>
          <div className="col-sm-4 flat-card">
            <img src={Globe} alt="" className="flat-card-img" />
            <p>Millions of guests</p>
            <p className="flat-card-text">
              Your property will be available on all quickflats holiday rental
              sites for millions of guests.
            </p>
          </div>
          <div className="col-sm-4 flat-card">
            <img src={Place} alt="" className="flat-card-img" />
            <p>We're here for you, 24/7</p>
            <p className="flat-card-text">
              A dedicated support team is ready around the clock to make sure
              that everything runs smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatListingHero;
