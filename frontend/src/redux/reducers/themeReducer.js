import { GLOBALTYPES } from "../actions/globalTypes";
const initialState = {
  dark: true,
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
      return !state;
    default:
      return state;
  }
};
export default themeReducer;
