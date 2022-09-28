import React from 'react';
import {useSelector} from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
 
const AdminRouteGuard = ({ element: Component, ...rest }) => {
    const userState = useSelector(state => state.user)

    function isAdmin() {
        if(userState.role === 1){
            return true
        }
        return false
    }

    return(
        isAdmin() ? <Outlet/> : <Navigate to="/userProfile"/>
    )
};
 
export default AdminRouteGuard;