import { Component } from "react";
import { connect } from "react-redux";
import { removeCurrentUser } from "../redux/user/user.actions";
import { logout } from "../services/authService";
class Logout extends Component {
  componentDidMount() {
    logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeCurrentUser: () => dispatch(removeCurrentUser()),
});

export default connect(null, mapDispatchToProps)(Logout);
