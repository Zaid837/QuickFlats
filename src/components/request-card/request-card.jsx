import React from "react";
import "./request-card.styles.css";

const RequestCard = () => {
  return (
    <div className="request-card">
      <div className="request-title mt-2">
        <p>Requests (2)</p>
      </div>
      <div className="request-con">
        <hr />
        <p>No available request yet</p>
      </div>
    </div>
  );
};

export default RequestCard;
