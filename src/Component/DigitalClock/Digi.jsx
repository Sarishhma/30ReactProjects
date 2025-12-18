import React, { useEffect, useState } from 'react'

export default function Digi() {
const [time ,setTime]=useState(new Date())
useEffect(()=>{
    const intervalId = setInterval(() => {
        setTime(new Date());
        
    }, 1000);
    return()=>clearInterval(intervalId)

},[])
const hours = time.getHours().toString().padStart(2,"0");
const minute = time.getMinutes().toString().padStart(2,"0");
const second = time.getSeconds().toString().padStart(2,"0");
  return (
    <div className='text-black'>
        {hours}:{minute}:{second}
    </div>
  )
}
