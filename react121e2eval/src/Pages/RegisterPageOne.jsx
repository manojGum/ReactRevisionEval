import React from 'react'

const RegisterPageOne = ({formData,setFormData}) => {
  return (
    <div className='registerpage-container'>
        <div style={
           {
               marginBottom:"1rem"
           }}>
        <input type="text" placeholder='Name ..' value={formData.name} onChange={(event)=>setFormData({...formData, name: event.target.value})}/>
        </div>
      <div style={
           {
               marginBottom:"1rem"
           }}>
      <input type="email" placeholder='Email ..' value={formData.email} onChange={(event)=>setFormData({...formData, email: event.target.value})} />
      </div>

    </div>
  )
}

export default RegisterPageOne