import React from "react";
import "./flat-container.styles.css";
import Flat1 from "../../assets/images/flat1.jpg";
import http from "../../services/httpService";
import { api } from "../../config.json";

class FlatContainer extends React.Component {
  state = {
    flats: [],
  };

  async componentDidMount() {
    try {
      const flat = await http.get(`${api}/listflat`);
      console.log(flat);
      console.log(flat.data.flats);
      this.setState({ flats: flat.data.flats });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { flats } = this.state;
    return (
      <div className="flat-container">
        <div className="container">
          <div className="flats">
            {flats.map((flat) => (
              <div className="flat">
                <div className="flat-image-card">
                  <img
                    src={flat.images}
                    alt="flat-img"
                    className="flat-image"
                  />
                </div>
                <h5>{flat.fullName}</h5>
                <p>
                  {flat.city},{flat.state}
                </p>
                <p>
                  &#8358;{flat.price}/{flat.paymentPlan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FlatContainer;
