import React from 'react'
import { Routes,Route } from 'react-router-dom'
import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'
import Dashboard  from "./Dashboard";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
   <>
   <Routes>
       <Route path='/register/one' element={<RegisterPageOne />} />
       <Route path='/register/two' element={<RegisterPageTwo />} />
       <Route path='/dashboard' element={ < Dashboard />} />
   </Routes>
   </>
  )
}

export default AllRoutes