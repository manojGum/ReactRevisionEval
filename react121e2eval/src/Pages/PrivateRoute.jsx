import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext"

const PrivateRoute = ({children,to}) => {
    const [isAuth]=useContext(AuthContext)
    if(isAuth)
    {
        return children
    }
  return (
    <Navigate to={to|| "/dashboard"}> </Navigate>
  )
}

export default PrivateRoute