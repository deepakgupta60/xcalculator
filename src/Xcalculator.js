import React, { useState } from 'react'

import "./XCalculator.css"
const Xcalculator = () => {
    const [input, setInput]=useState("");
    const [result, setResult]=useState("");



    const handleClick=(value)=>{
        if(value==="=")
        {
            calculateValue()
        }
        else if(value==="C")
        {
            setInput("")
            setResult("")
        }
        else{
        
            setInput((prev)=>prev+value);
        }
    }

    const calculateValue=()=>
    {
        setResult(eval(input))
    }


  return (
    <div className='mainCalculator'>
   
    <br/>
    <div style={{width:"300px", margin:"auto"}}>
    <h1>React Calculator</h1>
    <input type='text' readOnly value={input}/> <br/>
   <div>{result}</div>
   
    <div className='row'>
    <button className='col' onClick={()=>handleClick(7)} >7</button>
    <button className='col' onClick={()=>handleClick(8)}>8</button>
    <button className='col' onClick={()=>handleClick(9)}>9</button>
    <button className='col' onClick={()=>handleClick("+")}>+</button>
    </div>

    <div className='row'>
    <button className='col' onClick={()=>handleClick(4)} >4</button>
    <button className='col' onClick={()=>handleClick(5)}>5</button>
    <button className='col' onClick={()=>handleClick(6)}>6</button>
    <button className='col' onClick={()=>handleClick("-")}>-</button>
    </div>


    <div className='row'>
    <button className='col' onClick={()=>handleClick(1)}>1</button>
    <button className='col' onClick={()=>handleClick(2)}>2</button>
    <button className='col' onClick={()=>handleClick(3)}>3</button>
    <button className='col' onClick={()=>handleClick("*")}>*</button>
    </div>

    <div className='row'>
    <button className='col' onClick={()=>handleClick("C")} >C</button>
    <button className='col' onClick={()=>handleClick(0)}>0</button>
    <button className='col' onClick={()=>handleClick("=")}>=</button>
    <button className='col' onClick={()=>handleClick("/")}>/</button>
    </div>

  
    
   
    </div>
    </div>
  )
}

export default Xcalculator