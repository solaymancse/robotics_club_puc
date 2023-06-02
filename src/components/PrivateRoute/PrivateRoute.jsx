import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const isLoggedIn = useSelector(state=> state.isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login"/>;
}
