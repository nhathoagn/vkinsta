import {useDispatch, useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";
import Notify from "./alert/Alert";
import {Route, Routes} from "react-router-dom";
import ProtectedLayout from "./page/ProtectedLayout";
import ShareLayout from "./page/ShareLayout";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import {useEffect} from "react";
import themeReducer from "./redux/reducers/themeReducer";
import {GLOBALTYPES} from "./redux/actions/globalTypes";

function App() {
  const dark  = useSelector(state => state.themeReducer)
    console.log("app",dark)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type: GLOBALTYPES.THEME, payload: {}})
    },[])
  return <div className={`${dark ? "dark" : ""} relative `}>
    <Notify/>
    <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme={dark ? "dark" : "light"}
    />
        <Routes>
            {/*<Route
                path='/'
                element={
                    <ProtectedLayout>
                        <ShareLayout />
                    </ProtectedLayout>
                }>*/}
               {/* <Route
                    // @ts-ignore
                    index
                    path='/'
                    element={<Dashboard />}
                />*/}
               {/* <Route path='/messenger' element={<Messenger />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/profile/*' element={<Profile />} />*/}
                {/*<Route
                    path='/update-profile'
                    element={<UpdateProfile />}
                />*/}
                {/*<Route
                    path='/post/information/:id'
                    element={<Information />}
                />*/}
           {/* </Route>*/}

            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />

            {/*<Route
                path='/forget-password'
                element={<ForgetPassword />}
            />*/}

          {/*  <Route path='*' element={<Error />} />*/}
        </Routes>

  </div>;

}

export default App;
