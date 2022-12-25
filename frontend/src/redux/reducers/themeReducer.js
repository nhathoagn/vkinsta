import { GLOBALTYPES } from "../actions/globalTypes";
const dark = JSON.parse(localStorage.getItem("dark"));
const initialState = {
  dark: dark || false,
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
      return {...state,dark: action.payload}
    default:
      return state;
  }
};
export default themeReducer;
