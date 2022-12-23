import { GLOBALTYPES } from "../actions/globalTypes";
/*const dark = JSON.parse(localStorage.getItem("dark"));*/
/*console.log("dark",dark)*/
const initialState = {
  dark: false,
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
      console.log("stateReducer",state)
     /* if (state.dark){
        document.documentElement.classList.add("dark")
      }else {
        document.documentElement.classList.remove("dark")
      }*/
      return state;
    default:
      return state;
  }
};
export default themeReducer;
