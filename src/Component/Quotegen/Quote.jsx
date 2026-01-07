
import { Loader } from '@react-three/drei'
import React, { useState } from 'react'

export default function Quote() {
  const [loading ,setLoading]=useState(false)
  const[quote,setQuote]=useState('')

  const fetchQuote =async (params) => {
    setLoading(true)
    try{
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      setQuote(data.quote)
  
    }catch(error){
      console.log('using fallback quotes')
      const fallback=[
        {
          quote:"im the only person who can make it happen"
        },
        {
          quote :"believe in yourself"
        }
      ];
      const random = Math.floor(Math.random()*fallback.length)
      setQuote(fallback[random].quote)

    }finally{
      setLoading(false)
    }
    
  } 
  return (
    <div className='text-black text-2xl '><h1>Generate a quote</h1>
    <button  onClick={fetchQuote}className='bg-red-300 p-3 rounded-3xl'> {loading ? "loading...":'generate'}</button>
    <h1>{quote}</h1>
   
  </div>
  )
}
