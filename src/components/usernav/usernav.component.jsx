import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./usernav.styles.css";

class UserNav extends React.Component {
  render() {
    return (
      <div className="usernav">
        <div className="container">
          <div className="row">
            <div className="test">
              <div className="nav-items">
                <div className="toggle" onClick={() => this.props.menu()}>
                  <div className="toggle-bar"></div>
                  <div className="toggle-bar"></div>
                  <div className="toggle-bar"></div>
                </div>
                <Link to="/" className="dashboard-logo" id="logo">
                  <img style={{ width: "35px" }} src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="logout">
                <Link to="/logout">
                  <p>log out</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserNav;
