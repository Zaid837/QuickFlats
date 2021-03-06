import React from "react";
import quickflats from "../../assets/video/quickflats.mp4";
import mobile from "../../assets/video/quickflats-mobile.mp4";
import SearchForm from "../SearchForm/search-form.component";
import "./herobox.styles.css";

const HeroBox = () => {
  const deviceWidth = window.innerWidth;
  return (
    <React.Fragment>
      <div className="hero">
        <video
          src={deviceWidth > 768 ? quickflats : mobile}
          style={{ width: "100%" }}
          autoPlay
          muted
          loop
        ></video>
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-heading">
              Looking for a flat to rent, a short-let apartment? <br />
              Find the perfect flat rental here.
            </h1>
            <SearchForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default HeroBox;
