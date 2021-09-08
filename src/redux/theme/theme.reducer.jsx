const INITIAL_STATE = {
  theme: false,
};

const ThemeReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...prevState,
        theme: action.payload,
      };
    default:
      return prevState;
  }
};

export default ThemeReducer;
