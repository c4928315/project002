import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useLocalContext from '../Hooks/useLocalContext'

function RequireAuth() {

    const { auth } = useLocalContext();
    const location = useLocation();
    
  return (
    auth?.user
    ? <Outlet />
    : <Navigate to="/login" state={{ from: location }} replace/>
  )
}

export default RequireAuth
