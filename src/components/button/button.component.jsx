import React from "react";
import "./button.styles.css";

class CustomButton extends React.Component {
  render(props) {
    const { label, size, invertedButton, type } = this.props;
    return (
      <React.Fragment>
        <button
          type={type}
          className={`${invertedButton ? "c-btn-inverted" : "c-btn"}`}
          style={{ width: size }}
        >
          {label}
        </button>
      </React.Fragment>
    );
  }
}

export default CustomButton;
