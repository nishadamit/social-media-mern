import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isLoggedIn = () =>{
        const loginData = localStorage.getItem("loginData");
        if(loginData) 
          return true
        else 
          return false
    }  
    return isLoggedIn() ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default ProtectedRoutes