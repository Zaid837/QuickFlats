import React, { Component } from "react";
import ListingUserData from "../ListingUserData/listing-user-data.component";
import ListingFlatData from "../ListingFlatData/listing-flat-data.component";
import ListingDescriptionData from "../ListingDescriptionData/listing-description-data.component";

class FlatListingForm extends Component {
  state = {
    step: 1,
    fullName: "",
    email: "",
    state: "",
    city: "",
    address: "",
    paymentPlan: "",
    price: "",
    rooms: "",
    pictureUpload: "",
    flatDescription: "",
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Proceed to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //handle input step
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      fullName,
      email,
      state,
      city,
      address,
      paymentPlan,
      price,
      rooms,
      pictureUpload,
      flatDescription,
    } = this.state;
    const values = {
      fullName,
      email,
      state,
      city,
      address,
      paymentPlan,
      price,
      rooms,
      pictureUpload,
      flatDescription,
    };
    switch (step) {
      case 1:
        return (
          <ListingUserData
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ListingFlatData
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ListingDescriptionData
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <h1>success</h1>;
      default:
        return (
          <ListingUserData
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default FlatListingForm;
