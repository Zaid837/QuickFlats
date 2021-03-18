import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/button.component";

class LoginForm extends React.Component {
  email = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    //call the server
    const email = this.email.current.value;
    console.log(email);
  };

  render() {
    return (
      <React.Fragment>
        <div className="login-div">
          <h1 className="log mb-4">Login</h1>
          <form method="" onSubmit={this.handleSubmit}>
            <div className="form-group mb-3">
              <input
                ref={this.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-control form-input"
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
            <Link to="#" className="mb-3 forgot-password">
              <p> forgot password?</p>
            </Link>
            <CustomButton label="Log in" size="120px" invertedButton />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
