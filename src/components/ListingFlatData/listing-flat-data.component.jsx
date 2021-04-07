import React, { Component } from "react";
import FormBg from "../../assets/images/formbg.png";
import "./listing-flat-data.styles.css";
import Input from "../input";

class ListingFlatData extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="form-con">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 animate__animated animate__fadeInUp">
              <h2> Let's get more information about your flat</h2>
              {/* <hr /> */}
              <form action="" className="list-form">
                <ul className="form-style-1">
                  <li>
                    <label>
                      How would you like to receive payment for this room?
                      <span className="required">*</span>
                    </label>
                    <select
                      name="field4"
                      className="field-select"
                      onChange={handleChange("paymentPlan")}
                      value={values.paymentPlan}
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Quaterly(every 3 months)">
                        Quaterly(every 3 months)
                      </option>
                      <option value="Bi-annually(every 6 months)">
                        Bi-annually(every 6 months)
                      </option>
                      <option value="Yearly">Yearly</option>
                    </select>
                  </li>
                  <li>
                    <label>
                      How much would you charge for this flat?
                      <span className="required">*</span>
                    </label>
                    <Input
                      type="number"
                      name="price"
                      onChange={handleChange("price")}
                      value={values.price}
                    />
                  </li>
                  <li>
                    <label>
                      How many rooms? <span className="required">*</span>
                    </label>
                    <Input
                      type="number"
                      name="rooms"
                      onChange={handleChange("rooms")}
                      value={values.rooms}
                    />
                  </li>

                  <div className="button-con mt-3">
                    <div>
                      <button className="back" onClick={this.back}>
                        back
                      </button>
                    </div>
                    <div>
                      <button className="continue" onClick={this.continue}>
                        continue
                      </button>
                    </div>
                  </div>
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

export default ListingFlatData;
