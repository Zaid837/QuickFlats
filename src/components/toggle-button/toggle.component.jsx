import React, { Component } from "react";
import "./toggle.styles.css";

class Toggle extends Component {
  toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
  };
  render(props) {
    return (
      <React.Fragment>
        <input type="checkbox" id="toggle-button-css" />

        <label
          htmlFor="toggle-button-css"
          className="toggle-button toggle-button-css"
          onClick={this.toggleTheme}
        >
          <div className="item off">🌚</div>
          <div className="item on">🌝</div>
          <div className="slider"></div>
        </label>
      </React.Fragment>
    );
  }
}

export default Toggle;
