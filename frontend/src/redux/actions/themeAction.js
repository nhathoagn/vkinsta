import {GLOBALTYPES} from "./globalTypes";

export  const DarkMode = (data) => async (dispatch) =>{
        dispatch({type: GLOBALTYPES.THEME, payload:{dark:data}})
        if (data){
            document.documentElement.classList.add("dark")
        }else {
            document.documentElement.classList.remove("dark")
        }
}