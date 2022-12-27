import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import notifyReducer from "./notifyReducer"
import homeReducer from "./postReducer"
export const reducers =  combineReducers({
    themeReducer,authReducer, notifyReducer,homeReducer
});
