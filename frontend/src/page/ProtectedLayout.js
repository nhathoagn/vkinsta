
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const ProtectedLayout = ({children}) => {
    const {user} = useSelector(state => state.authReducer);
    if (!user) {
        return <Navigate to='/home' />;
    }
    return children;
};

export default ProtectedLayout;
