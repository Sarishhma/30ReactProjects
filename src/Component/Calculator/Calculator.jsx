import React, { useState } from 'react'

export default function Calculator() {
    const [value ,setValue]=useState('')
const handleDelete=()=>{
   setValue(value.slice(0,-1))
}
const handleClear=()=>{
setValue('')
}
const handleResult=()=>{
    try{
        setValue(String(Function(`return ${value}`)()))
    }catch{
        setValue("Error")
    }

}
const handleclick =(val)=>{
    setValue((prev)=>prev+val)
}
  return (
    <div className='text-black'>
        <h1>Calculator</h1>
        <div>
            <input type="text" value={value} readOnly  />
            <button onClick={handleDelete}> ⌫</button>
            <button onClick={handleClear}>clear</button>
{/* buttons */}
<button onClick={()=>handleclick('/')}>/</button>
<button onClick={()=>handleclick('7')}>7</button>
<button onClick={()=>handleclick('8')}>8</button>
<button onClick={()=>handleclick('9')}>9</button>
<button onClick={()=>handleclick('*')}>*</button>

<button onClick={()=>handleclick('4')}>4</button>
<button onClick={()=>handleclick('5')}>5</button>
<button onClick={()=>handleclick('6')}>6</button>
<button onClick={()=>handleclick('-')}>-</button>

<button onClick={()=>handleclick('1')}>1</button>
<button onClick={()=>handleclick('2')}>2</button>
<button onClick={()=>handleclick('3')}>3</button>
<button onClick={()=>handleclick('+')}>+</button>

<button onClick={()=>handleclick('0')}>0</button>
<button onClick={()=>handleclick('.')}>.</button>

<button onClick={handleResult}>=</button>
    
        </div>
</div>
  )
}
