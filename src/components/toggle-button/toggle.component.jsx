import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/theme.actions';
import './toggle.styles.css';

const Toggle = () => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.theme);

  const toggleTheme = () => {
    dispatch(setTheme(!themeState));
  };

  return (
    <React.Fragment>
      <input type="checkbox" id="toggle-button-css" />

      <label
        htmlFor="toggle-button-css"
        className="toggle-button toggle-button-css"
        onClick={toggleTheme}
      >
        <div className="item off">🌚</div>
        <div className="item on">🌝</div>
        <div className="slider"></div>
      </label>
    </React.Fragment>
  );
};

export default Toggle;
