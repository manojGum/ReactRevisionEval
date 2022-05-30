import React, {useState} from 'react'
import RegisterPageOne from './RegisterPageOne';
import RegisterPageTwo from './RegisterPageTwo';

const Dashboard = () => {
    const [page, setPage]=useState(0);
    const FormTitle=["RegisterPageOne","RegisterPageTwo"];
    const [formData,setFormData]=useState({
        name:"",
        email:""
    })
    const PageDisplay=()=>{
        if(page===0)
        {
            return <RegisterPageOne formData={formData} setFormData={setFormData}/>
        }
        else  if(page===1)
        {
            return <RegisterPageTwo />
        }
      
    }
  return (
    <div className='form'>

    <div className='progressbar'>
        <div style={{width:page===0 ?"50":"100"}}></div>
    </div>
    <div className='form=container'>
        <div  className='header'>
            <h1>{FormTitle[page]}</h1>
        </div>
        <div className='body'>{PageDisplay()}</div>
        <div className='footer'>
            <button
              disabled={page===0}
              onClick={()=>{setPage((currPage)=>currPage-1);
              }}
            >Prev</button>
            <button 
            disabled={page===FormTitle.length-1}
            onClick={()=>{setPage((currPage)=>currPage+1);
            }}>Next</button>
        </div>

    </div>
</div>
  )
}

export default Dashboard