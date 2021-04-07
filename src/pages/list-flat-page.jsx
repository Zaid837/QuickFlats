import React, { Component } from "react";
import FlatListingForm from "../components/FlatListingForm/flat-listing-form.component";
import FlatListingHero from "../components/FlatListingHero/flat-listing-hero";
import FlatListingTimeline from "../components/FlatListingTimeline/flat-listing-timeline";

export class ListFlatPage extends Component {
  render() {
    return (
      <div style={{ marginTop: "120px" }}>
        <FlatListingForm />
        <FlatListingHero />
        <FlatListingTimeline />
      </div>
    );
  }
}

export default ListFlatPage;
