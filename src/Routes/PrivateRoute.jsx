import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingSpinner from '../../src/assets/Images/loding/loading-42.gif'


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const  loaction = useLocation()
    if(loading){
        return <div className="flex item-center justify-center"><img src={loadingSpinner} className="w-[200px] "/></div> 
    }

    if(user){
        return children;
    }
    return <Navigate state={loaction.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;