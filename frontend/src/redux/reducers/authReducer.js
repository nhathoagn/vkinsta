import {GLOBALTYPES} from "../actions/globalTypes";

const initialState = {
    token: "",
    user: {
        isAdmin: false
    }
}
const authReducer = (state = initialState,action) =>{
    switch (action.type) {
        case GLOBALTYPES.AUTH:
            return action.payload;
        default:
            return state
    }
}
export default authReducer