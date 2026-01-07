import React, { useEffect, useState } from 'react'

export default function Weather() {
    const [city,Setcity]=useState('');
    const [weather,Setweather]=useState(null);
const [error,Seterror]=useState('');
    const [loading ,setLoading]=useState(false)

     const apiKey = import.meta.env.VITE_WEATHER;
     const getweather= async(city)=>{
        if (!city)return;
        setLoading(true)
        try{
          const response=  await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        if(! response.ok){
            throw new Error ('city not found')
        }
        const data = await response.json();
         Setweather(data);
       localStorage.setItem('lastcity',city)
       
       

        }catch(error){
            Seterror(error.message);
            Setweather(null)
        } finally{
            setLoading(false)
        }
     }
     useEffect(()=>{
        const savedcity = localStorage.getItem('lastcity');
        if(savedcity){
            Setcity(savedcity)
            getweather(savedcity)
        }

     },[])

  return (
    <div>
        <input type="text" placeholder='Enter the city name' value={city} onChange={(e)=>Setcity(e.target.value)} />
        <button onClick={()=>getweather(city)} disabled={loading}>{loading ? 'Loading....':'search'}</button>
        
        {error && <p>{error}</p>}
        {weather &&(
            <div>
                <h1>City ={weather.name}</h1>
                <p>Humidity ={weather.main.humidity}</p>
                <p>Temperature={weather.main.temp}</p>


            </div>
        )}
    </div>
  )
}
