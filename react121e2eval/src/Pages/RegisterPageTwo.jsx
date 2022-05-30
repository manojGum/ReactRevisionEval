import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom';
import {RegistrationContext} from "../Context/RegistrationContextProvider"
import {AuthContext} from "../Context/AuthContext";
const initialFormState = {
    name :"",
    email:"",
    phone:"",
    address:""
}
function RegisterPageTwo() {
    const [state,dispatch] = useContext(RegistrationContext,initialFormState);
    const [isAuth,toggleAuth]  = useContext(AuthContext)
    if(state.name =="" && state.email==""){
        return <Navigate to ="/register/one"/>
    }
    const handelchange = (e)=>{
        dispatch({
            type:"Handele Input",
            field:e.target.name,
            payload:e.target.value,
        });
    }
  return (
    <div>
        <input type="text" onChange={handelchange} name="phone" value={state.phone} placeholder='enter your phone'/>
        <input type="text" onChange={handelchange} name="address" value={state.address} placeholder='enter your adress'/>
        <button onClick={toggleAuth} ><Link to="/dashboard">submit</Link></button>
    </div>
  )
}

export default RegisterPageTwo