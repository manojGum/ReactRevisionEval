import React, {useState} from 'react'
import RegisterPageOne from './RegisterPageOne';
import RegisterPageTwo from './RegisterPageTwo';

const Dashboard = () => {
    const [page, setPage]=useState(0);
    const FormTitle=["RegisterPageOne","RegisterPageTwo"];
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        address:"",
        phone:""

    })
    const PageDisplay=()=>{
        if(page===0)
        {
            return <RegisterPageOne formData={formData} setFormData={setFormData}/>
        }
        else  if(page===1)
        {
            return <RegisterPageTwo  formData={formData} setFormData={setFormData}/>
        }
      
    }
  return (
    <div className='form'>

    {/* <div className='progressbar'>
        <div style={{width:page===0 ?"50":"100"}}></div>
    </div> */}
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
            
            onClick={()=>{
                if(page===FormTitle.length-1){
                    alert("form submited")
                }
                else{
                    setPage((currPage)=>currPage+1);
                }
                
                
            }}>
               {page===FormTitle.length-1? "Sumit" : "Next"}
            
            </button>
        </div>

    </div>
</div>
  )
}

export default Dashboard