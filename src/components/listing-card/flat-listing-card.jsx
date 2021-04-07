import React from "react";
import "./flat-listing.styles.css";
import Flat1 from "../../assets/images/flat1.jpg";
import Flat2 from "../../assets/images/flat2.jpg";

const ListingCard = () => {
  return (
    <div className="listing-card">
      <div className="listings-title mt-2">
        <p>Listings (2)</p>
      </div>
      <div className="listings-con">
        <div className="list-card">
          <div className="flat-img-card">
            <img src={Flat1} alt="flat-img" className="flat-img" />
          </div>
          <div className="flat-info">
            <p>#100,000/ Monthly</p>
            <p>Lekki, Nigeria</p>
          </div>
        </div>
        <div className="list-card mt-2">
          <div className="flat-img-card">
            <img src={Flat2} alt="flat-img" className="flat-img" />
          </div>
          <div className="flat-info">
            <p>#80,000/ Monthly</p>
            <p>Ikeja, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
