import React from 'react'

const RegisterPageOne = ({formData,setFormData}) => {
  return (
    <div className='registerpage-container'>
        <input type="text" placeholder='Name ..' value={formData.name}/>
        <input type="email" placeholder='Email ..' value={formData.email} />
    </div>
  )
}

export default RegisterPageOne