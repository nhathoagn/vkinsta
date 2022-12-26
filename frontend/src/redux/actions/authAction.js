import {GLOBALTYPES} from "./globalTypes";
import {postDataAPI} from "../../utils/fetchData";
import {toast} from "react-toastify";
import {data} from "autoprefixer";
import valid from "../../utils/valid";
import {useNavigate} from "react-router-dom";

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
       for (const msg in check.errMsg){
           toast.error(msg || "Something went wrong!" )
       }
    }
   try {
     const res = await postDataAPI('register', data)

       dispatch({
           type: GLOBALTYPES.AUTH,
           payload: {
               token: res.data.access_token,
               user: res.data.user
           }
       })

       localStorage.setItem("firstLogin", true)
       toast.success(res.data.msg || "Register success!")
   }catch (e) {
        toast.error(e.response.data.msg || "Something went wrong!")
       /*console.log(e.response.data.msg)*/

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