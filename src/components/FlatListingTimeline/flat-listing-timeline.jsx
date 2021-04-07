import React from "react";
import "./flat-listing-timeline.styles.css";
import Timeline from "../../assets/images/timelineimg.png";

const FlatListingTimeline = () => {
  return (
    <div className="flat-timeline">
      <div className="container">
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-sm-6 desktop timeline-img ">
            <img
              src={Timeline}
              alt="flatlisting-img"
              className="timeline-img"
            />
          </div>
          <div className="col-sm-6 timeline-flow ">
            <h3 className="timeline-header">How this works</h3>
            {/* timeline */}
            <div className="timeline">
              <ul>
                <li>
                  <div className="content animate__animated animate__slideInLeft">
                    <h3>Set up your property</h3>
                    <p>
                      Explain what's unique, show off with photos, and set the
                      right price
                    </p>
                  </div>
                  <div className="step">
                    <h5>step1</h5>
                  </div>
                </li>
                <li>
                  <div className="content animate__animated animate__slideInRight">
                    <h3>Start earning</h3>
                    <p>
                      We’ll help you collect payment, deduct a commission, and
                      send you the balance
                    </p>
                  </div>
                  <div className="step">
                    <h5>step2</h5>
                  </div>
                </li>
                <li>
                  <div className="content animate__animated animate__slideInLeft">
                    <h3>Get the perfect match</h3>
                    <p>
                      We’ll connect you with travellers from home and abroad
                    </p>
                  </div>
                  <div className="step">
                    <h5>step3</h5>
                  </div>
                </li>
                <div style={{ clear: "both" }}></div>
              </ul>
            </div>
            {/* timeline ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatListingTimeline;
