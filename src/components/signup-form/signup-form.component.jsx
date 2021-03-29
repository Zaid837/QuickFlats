import React from "react";
import CustomButton from "../button/button.component";
import Input from "../input";
import Joi from "joi-browser";
import { register } from "../../services/userService";
import Form from "../Form/form";

class SignUpForm extends Form {
  state = {
    data: {
      fullName: "",
      password: "",
      email: "",
      phoneNumber: "",
    },
    errors: {},
  };

  schema = {
    fullName: Joi.string().required().label("Fullname"),
    email: Joi.string().required().label("email"),
    password: Joi.string().required().min(5).label("password"),
    phoneNumber: Joi.string().required().label("phoneNumber").min(11),
  };

  doSubmit = async () => {
    try {
      //call the server
      const response = await register(this.state.data);
      console.log(response);
    } catch (e) {
      if (e.response && e.response.status === 409) {
        let errors = { ...this.state.errors };
        errors = e.response.data;
        console.log(errors);
        this.setState({ errors });
      }
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <div className="reg-div shadow-lg  animate__animated animate__slideInUp">
          <h1 className="reg mb-4">Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <Input
              name="fullName"
              value={data.fullName}
              onChange={this.handleChange}
              error={errors.fullName}
            />
            <Input
              name="email"
              value={data.email}
              onChange={this.handleChange}
              error={errors.email}
            />
            <Input
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={this.handleChange}
              error={errors.phoneNumber}
            />
            <Input
              type="password"
              name="password"
              value={data.password}
              onChange={this.handleChange}
              error={errors.password}
            />

            <CustomButton label="Sign up" size="120px" type="submit" />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
