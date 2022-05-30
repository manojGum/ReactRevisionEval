import axios from "axios";
import { createContext, useEffect, useState } from "react";


 export const AuthContext = createContext();

export  const AuthcontextProvider =({children})=>{
 const [isAuth,setisAuth] = useState(false);
const [loading,setloading] = useState(false);

 const toggleAuth = async () =>{
    setloading(true);
     if(isAuth===false){
        axios
        .post("https://reqres.in/api/login", {
          email: "manojgum@gmail.com",
          password: "manojgum",
        })
        .then(function (response) {
          console.log(response);
          setisAuth(response.data.token);
          setloading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
   }
   else
   {
       setisAuth(()=>{
           return false
       })
       setloading(false);
   }
 }
 
 return <AuthContext.Provider value={[isAuth,toggleAuth]}>{children}</AuthContext.Provider>
}