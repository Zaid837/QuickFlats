import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import Footer from "../components/Footer/footer.component";

class MainLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainLayout;
