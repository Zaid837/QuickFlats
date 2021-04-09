import React, { Component } from "react";
import "./listing-user-data.styles.css";
import FormBg from "../../assets/images/formbg.png";
import Input from "../input";
import axios from "axios";

class ListingUserData extends Component {
  state = {
    states: [],
    cities: [],
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://www.universal-tutorial.com/api/states/Nigeria",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJheW9taWRlLnphaWRAdGhlYnVsYi5hZnJpY2EiLCJhcGlfdG9rZW4iOiJXdGp1VUVrLUhoVU5CWjRaYnkzSDg1bjFSbHNMTG54bnQxQXlKb0l5Nm4yd0ExX0F0WFpPd1R1ZklfQktmQ1pkUnhvIn0sImV4cCI6MTYxODAwNjI4NX0.KtQKqQoesr5-10idzDVmqTwpNOkkoxjDfZK0htwEgb4",
            Accept: "application/json",
          },
        }
      );
      this.setState({ states: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.values.state !== this.props.values.state) {
      try {
        const response_cities = await axios.get(
          `https://www.universal-tutorial.com/api/cities/${this.props.values.state}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJheW9taWRlLnphaWRAdGhlYnVsYi5hZnJpY2EiLCJhcGlfdG9rZW4iOiJXdGp1VUVrLUhoVU5CWjRaYnkzSDg1bjFSbHNMTG54bnQxQXlKb0l5Nm4yd0ExX0F0WFpPd1R1ZklfQktmQ1pkUnhvIn0sImV4cCI6MTYxODAwNjI4NX0.KtQKqQoesr5-10idzDVmqTwpNOkkoxjDfZK0htwEgb4",
              Accept: "application/json",
            },
          }
        );
        // console.log(response_cities);
        this.setState({ cities: response_cities.data });
      } catch (error) {
        console.log(error);
      }
      // console.log("matched");
    }
  }
  render() {
    const { states, cities } = this.state;
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
                      <option value="state">state</option>
                      {states.map((state) => (
                        <React.Fragment>
                          <option value={state._state_name}>
                            {state.state_name}
                          </option>
                        </React.Fragment>
                      ))}
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
                      {cities.map((city) => (
                        <option value={city.city_name}>{city.city_name}</option>
                      ))}
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
