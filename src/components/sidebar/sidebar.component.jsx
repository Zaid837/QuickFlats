import React from "react";
import { connect } from "react-redux";
import "./sidebar.styles.css";
import { Link } from "react-router-dom";

const Sidebar = ({ user }) => {
  return (
    <React.Fragment>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-content">
          <div className="user-profile">
            {/* <img src={User} alt="avatar" className="avatar" /> */}
            {user.user === null ? (
              " "
            ) : (
              <h5 className="username mt-3">
                {user.user && <p>Hi, {user.user.userName}</p>}
              </h5>
            )}
          </div>
          <div className="sidebar-nav mt-5">
            <ul className="list-unstyled">
              <li className="sidebar-nav-item">
                <Link to="#">Dashboard</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link to="#">Requests</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link to="#"> Flat listings</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link to="#">Payments</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link to="#">Messages</Link>
              </li>
              <li className="sidebar-nav-item">
                <Link to="#">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(Sidebar);
