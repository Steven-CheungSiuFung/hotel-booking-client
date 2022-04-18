import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/user.selector';

const PrivateRoute = ({children}) => {
    const user = useSelector(selectCurrentUser);
    const location = useLocation();

    return (
        user && user.token 
            ? children
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default PrivateRoute;