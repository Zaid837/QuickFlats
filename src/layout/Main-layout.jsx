import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import Footer from "../components/Footer/footer.component";

class MainLayout extends React.Component {
  render(props) {
    const { user } = this.props;
    return (
      <React.Fragment>
        <Navbar user={user} />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainLayout;
