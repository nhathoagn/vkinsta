import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import notifyReducer from "./notifyReducer"
export const reducers =  combineReducers({
    themeReducer,authReducer, notifyReducer
});
