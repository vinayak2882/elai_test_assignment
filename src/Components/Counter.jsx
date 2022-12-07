import React from "react";
import { useState} from "react";
import {Routes, Route, useNavigate} from "react-router-dom"



const Counter = () => {
    // const navigate = useNavigate();

    const [counter, setCounter] = useState(0);

    const counterPage = ()=>{
        // navigate('/countr');
    }

    const Hadlercounter1=()=>{
        setCounter(counter+1)
    }

  return (
    <div>
        <h1>Counter</h1>
        <h1>{counter}</h1>
      <button onClick={Hadlercounter1} >Increment</button>
      <button disabled={counter===0} onClick={counterPage} >Button To Go Next Page</button>
      <button disabled={counter===0} onClick={()=>setCounter(0)} >Reset</button>
   
      <Routes>
          <Route path="/countr" element={<countepage/>} />
          
        </Routes>
    </div>
  )
}


function countepage(counter) {
    return <h2>{counter}</h2>;
  }


export default Counter
