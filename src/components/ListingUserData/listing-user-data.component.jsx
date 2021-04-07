import React, { Component } from "react";
import "./listing-user-data.styles.css";
import FormBg from "../../assets/images/formbg.png";
import Input from "../input";

class ListingUserData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="form-con ">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 animate__animated animate__fadeInUp">
              <h2> Let's get started with listing your flat</h2>
              {/* <hr /> */}
              <form action="" className="list-form">
                <ul className="form-style-1">
                  <li>
                    <label>
                      Full Name <span className="required">*</span>
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      onChange={handleChange("fullName")}
                      value={values.fullName}
                    />
                  </li>
                  <li>
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      onChange={handleChange("email")}
                      value={values.email}
                    />
                  </li>
                  <li>
                    <label>
                      State<span className="required">*</span>
                    </label>
                    <select
                      name="field4"
                      className="field-select"
                      value={values.state}
                      onChange={handleChange("state")}
                    >
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                    </select>
                  </li>
                  <li>
                    <label>
                      City<span className="required">*</span>
                    </label>
                    <select
                      name="field4"
                      className="field-select"
                      value={values.city}
                      onChange={handleChange("city")}
                    >
                      <option value="Ikeja">Ikeja</option>
                      <option value="Lekki">Lekki</option>
                      <option value="Yaba">Yaba</option>
                    </select>
                  </li>
                  <li>
                    <label>
                      Address <span className="required">*</span>
                    </label>
                    <Input
                      type="text"
                      name="address"
                      onChange={handleChange("address")}
                      value={values.address}
                    />
                  </li>

                  <li>
                    <button className="continue" onClick={this.continue}>
                      continue
                    </button>
                  </li>
                </ul>
              </form>
            </div>
            <div className="col-sm-6">
              <img src={FormBg} alt="form-bg" className="form-bg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingUserData;
