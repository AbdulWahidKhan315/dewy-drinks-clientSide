import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <span className="loading loading-spinner text-secondary"></span>
    }

    if(user){
        return children;
    }else{
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    
};

export default PrivateRoutes;