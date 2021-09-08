import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../../components/sidebar/sidebar.component';
import UserNav from '../../components/usernav/usernav.component';
import './user-dashboard.styles.css';

class UserDashboard extends React.Component {
  menu = () => {
    var w = window.innerWidth;
    if (w > 768) {
      document.getElementById('sidebar').classList.toggle('hide-sidebar');
      document
        .getElementById('content-area')
        .classList.toggle('hide-contentarea');
    } else {
      document.getElementById('sidebar').classList.toggle('show-sidebar');
      document
        .getElementById('content-area')
        .classList.toggle('show-contentarea');
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

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps)(UserDashboard);
