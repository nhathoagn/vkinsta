import { GLOBALTYPES } from "../actions/globalTypes";
/*const dark = JSON.parse(localStorage.getItem("dark"));*/
/*console.log("dark",dark)*/
const initialState = {
  dark: true,
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
     return {
       dark: true
     }
     /* if (state.dark){
        document.documentElement.classList.add("dark")
      }else {
        document.documentElement.classList.remove("dark")
      }*/
    default:
      return state;
  }
};
export default themeReducer;
