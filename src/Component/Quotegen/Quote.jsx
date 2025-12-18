// import React, { useEffect, useState } from 'react'

// export default function Quote() {
//   const [quote,setquote]= useState('')
//    const [Author,setAuthor]= useState('')
//       const [Loading,setLoading]= useState(false)

// const fetchQuote = async ()=>{
//   setLoading(true);
// try{
//   const response = await 
//     fetch ('https://dummyjson.com/quotes/random');
//     const data = await response.json();
//     setquote(data.quote)
//     setAuthor(data.Author)
    
//   }catch (error){
//     console.log("using local fallback");
//     const fallback=[
      
//         {quote:"time waits for no one",
//           Author:"ef.Robbins"
//         },
//         {quote :"you can always surprass your limit",
// Author:"jk.Rollins"
//         }
      
//     ];
//     const random =Math.floor(Math.random()*fallback.length);
//     setAuthor(fallback[random].Author);
//     setquote(fallback[random].quote);
//   }finally{
//     setLoading(false)
//   }
// }



// useEffect(()=>{
//   fetchQuote()
// },[])
  
//   return (
//     <div className='text-black '>
//       <h1>Quote</h1>
//       <button onClick={fetchQuote} disabled={Loading}className='bg-red-500'> {Loading ? 'loading...' :"generate"}</button>
//       <h1>{quote}</h1>
//       <p>{Author}</p>

//     </div>
//   )
// }
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
