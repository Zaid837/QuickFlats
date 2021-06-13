import React, { Component } from "react";
import "./toggle.styles.css";

class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      themeSwitch: " ",
    };
  }
  componentDidMount() {
    const root = document.documentElement;
    let currentTheme = localStorage.getItem("theme");
    root.classList.add(currentTheme);
  }

  toggleTheme = () => {
    let currentTheme = localStorage.getItem("theme");
    const root = document.documentElement;

    if (currentTheme === "light") {
      root.classList.toggle("dark");
      localStorage.setItem("theme", "dark");
    }
    if (currentTheme === "dark") {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // this.setState({ Theme: currentTheme });
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
