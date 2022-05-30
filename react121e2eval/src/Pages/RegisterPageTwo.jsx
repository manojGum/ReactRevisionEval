
import React from 'react'

const RegisterPageTwo = ({formData,setFormData}) => {
  return (
    <div className='registerpage-container'>
        <div style={
           {
               marginBottom:"1rem"
           }}>
        <input type="text" placeholder='Address ..' value={formData.address}  onChange={(event)=>setFormData({...formData, address: event.target.value})}/>
        </div >
       
      <div style={
           {
               marginBottom:"1rem"
           }}><input type="number" placeholder='Phone ..' value={formData.phone}  onChange={(event)=>setFormData({...formData, phone: event.target.value})}/></div> 
    </div>
  )
}

export default RegisterPageTwo;