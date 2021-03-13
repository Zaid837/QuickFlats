import React from "react";
import quickflats from "../../assets/video/quickflats.mp4";
import SearchForm from "../SearchForm/search-form.component";
import "./herobox.styles.css";

const HeroBox = () => {
  return (
    <div>
      <div className="hero">
        <video
          src={quickflats}
          style={{ width: "100%" }}
          autoPlay
          muted
          loop
        ></video>
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-heading">
              Looking for a flat to rent? a short-let apartment? <br />
              Find the perfect flat rental.
            </h1>
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBox;