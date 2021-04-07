import React from "react";
import Sidebar from "../../components/sidebar/sidebar.component";
import UserNav from "../../components/usernav/usernav.component";
import "./user-dashboard.styles.css";

class UserDashboard extends React.Component {
  menu = () => {
    var w = window.innerWidth;
    if (w > 768) {
      document.getElementById("sidebar").classList.toggle("hide-sidebar");
      document
        .getElementById("content-area")
        .classList.toggle("hide-contentarea");
    } else {
      document.getElementById("sidebar").classList.toggle("show-sidebar");
      document
        .getElementById("content-area")
        .classList.toggle("show-contentarea");
    }
  };
  render() {
    const { user } = this.props;
    return (
      <div className="dashboard">
        <Sidebar user={user} />
        <div className="content-area" id="content-area">
          <UserNav menu={this.menu} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default UserDashboard;
