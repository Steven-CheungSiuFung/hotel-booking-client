import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/user.selector';

const PrivateRoute = ({children}) => {
    const auth = useSelector(selectCurrentUser);
    const location = useLocation();

    return (
        auth && auth.token 
            ? children
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default PrivateRoute;