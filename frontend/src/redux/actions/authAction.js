import {GLOBALTYPES} from "./globalTypes";
import {postDataAPI} from "../../utils/fetchData";
import {toast} from "react-toastify";
import {data} from "autoprefixer";
import valid from "../../utils/valid";

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {loading: true} })
        const res = await postDataAPI('login', data)
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })
        localStorage.setItem("firstLogin", true)
        toast.success("Login success.");
    }catch (error){
        toast.error(error?.response?.data?.msg || "Something went wrong!");
    }
}
export const register = (data) =>async (dispatch) => {
    const check = valid(data)
    if(check.errLength > 0){
        console.log("errMsg",check.errMsg)
        return check.errMsg
    }
   try {
       dispatch({type: GLOBALTYPES.ALERT, payload: {loading: true}})

       const res = await postDataAPI('register', data)
       dispatch({
           type: GLOBALTYPES.AUTH,
           payload: {
               token: res.data.access_token,
               user: res.data.user
           }
       })

       localStorage.setItem("firstLogin", true)
       console.log(res.data.msg)
   }catch (e) {
       console.log(e.response.data.msg)
   }
    
}
export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        await postDataAPI('logout')
        window.location.href = "/"
    }catch (e) {
        console.log(e.response.data.msg)
    }

}