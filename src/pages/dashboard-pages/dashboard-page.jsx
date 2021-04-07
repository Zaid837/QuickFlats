import React from "react";
import ListingCard from "../../components/listing-card/flat-listing-card";
import RequestCard from "../../components/request-card/request-card";
import "./dashboard-page.styles.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container mt-5">
      <div className="container">
        {/* <h4 className="user-welcome">Hello, Tamilore</h4> */}
        <div className="row mt-4 mb-5">
          <div className="col-sm-4 card-box">
            <p>Next payment date is</p>
            <p>xxxx</p>
          </div>
          <div className="col-sm-4 card-box">
            <p>Requests</p>
            <p>Accepted: 0, Pending: 0</p>
          </div>
          <div className="col-sm-4 card-box">
            <p>Listings</p>
            <p>2</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <ListingCard />
          </div>
          <div className="col-sm-6">
            <RequestCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
