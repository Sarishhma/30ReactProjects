import React, { useState } from 'react'

export default function Counter() {
   const [count ,setCount]= useState(0)
   const handleClick=()=>{
    if (count<=0){
    setCount(0)}else{
      setCount(count-1)
    }
   }
  return (
    <div className='text-black'>
      <h1>counter app</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>handleClick()}>-</button>
      </div>
  )
}
