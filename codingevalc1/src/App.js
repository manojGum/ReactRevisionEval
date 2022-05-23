import React, { useEffect,useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import axios from "axios"
import "./styles.css";

export default function App() {
  const [loading, setLoading]=useState(true)
  const [error,setError]=useState(false);
  const [data, setData] = useState([]);
  const [page,setPage]=useState(1);

  const [sortby,setSortby]=useState("ASC")
  const [title,setTitle]=useState("Sort by Descending Salary")

useEffect(()=>{
  fetchdata(page,sortby)

},[page,sortby])
const fetchdata=async()=>{
  setLoading(true)
  axios({
    method:'get',
    // url:"https://json-server-mocker-masai.herokuapp.com/candidates"
    url:"https://json-server-mocker-masai.herokuapp.com/candidates",params:{
      _page:page,
      _limit:5,
      _sort:"salary",
      _order:sortby
    }
  })
  .then(res=>{
    setData(res.data);
    setLoading(false);
  })
  .catch(err=>{
    setError(true);
    setLoading(false)
  })
}


const handleClick=()=>{
  if(sortby==="ASC"){
    setSortby("DESC")
    setTitle("Sort by Ascending Salary")
    setLoading(true)
  }
  else{
    setSortby("ASC")
    setTitle("Sort by Descending Salary")
    setLoading(true)
  }
}



console.log(data)
  return (
    <div className="App">
      <div>
        {loading && <div id="loading-container">...Loading</div>}
        {/* <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} disabled={salarysort==="desc"} onClick={()=>setSalarysort("desc")} /> */}
        <Button onClick={handleClick} id="SORT_BUTTON" title={title} />
        <Button title="PREV" id="PREV"  disabled={page===1} onClick={()=>setPage(page-1)}/>
        <Button id="NEXT" title="NEXT" onClick={()=>setPage(page+1)}/>
      </div>
      <div>
      {data.map((item) => <CandidateCard key={item.id} {...item}/>)}
      </div>
    
    </div>
  );
}
