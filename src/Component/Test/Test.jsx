//testing my knowledging of creating projects without seeing to see if  can code 
//Apps that im creating
// 1.	Counter App - Basic useState
// 2.	Todo List - CRUD operations
// 3.	Calculator - State management
// 4.	Digital Clock - useEffect, setInterval
// 5.	Random Quote Generator - API fetch


import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Test() {
    //counter
    const [count,setcount]=useState(0)
    const handlePlus =()=>{
        setcount(count+1)
        
    }
     const handleMinus =()=>{
       if (count<=0){
        return 0;
        }else{
             setcount(count-1)
        }
    }
    const handleReset=()=>{
        setcount(0)
    }
    //todo

const [task,setTask]=useState('')
const [desc,setdesc]=useState('')
const[list,setList]=useState(()=>{
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos):
    [
        {
            id:1,
            task:"coding",
            desc:"coding for 40mins",
        },
         {
            id:2,
            task:"coding",
            desc:"coding for 40mins",
        }
    ]

})
    useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(list))
},[list])

const Add =()=>{
    if(task===""||desc===""){
        alert('enter task and desc both')
    return;}
    const newTodos = 
    {
        id: Date.now(),
        task:task,
        description:desc,
    };
    setList([...list,newTodos]);
setTask('');
setdesc('');

    


}
const Delete =(id)=>{
    const remove=list.filter((task)=>task.id!==id)
    setList(remove)
}
//calculator
const[value,setValue]=useState('')
const handleClick=(value)=>{
    setValue((prev)=>prev+value)
}
const handleDelete=()=>{
    setValue(value.slice(0,-1))
}
const handleClear=()=>{
    setValue('')
}
const handleResult=()=>{
    try{
        setValue(String(Function(`return ${value}`)()))

    }catch(err){
        setValue(err.message)
    }
    
}
//clock
const[time,settime]=useState(new Date())
const hour = time.getHours().toString().padStart(0,2);
const minute = time.getMinutes().toString().padStart(0,2);
const second = time.getSeconds().toString().padStart(0,2);
useEffect(()=>{
    const interval = setInterval(() => {
        settime(new Date())
        
    }, 1000);
    return()=> clearInterval(interval)
})
//quote generator
const [quote,setquote]=useState('')
const [loading,setLoading]=useState(false)
const fetchApi = async()=>{
    setLoading(true)
    try{
        const res = await axios.get("https://dummyjson.com/quotes/random")
        console.log(res.data)
        setquote(res.data.quote)
    }catch(err){
        console.log(err.message)
        const fallback = [
            {
                id:1,
                quote:"every pain that doesnt kill you makes you stronger",
            },
            {
                id:2,
                quote:"Do it regardless"
            }
            
        ]
        const random = Math.floor(Math.random()*fallback.length)
        setquote([fallback[random].quote])
    }finally{
        setLoading(false)
    }
}








  return (
    <div>
        <section className='Counter'>
            <h1>Counter App</h1>
            <button onClick={()=>handlePlus()}> increase</button>
            <button  onClick={()=>handleMinus()}>Minus</button>
            <button onClick={()=>handleReset()}>Reset</button>
             <h2>{count}</h2>
         </section>
        <section className='Todos'>
            <h1>TodoApp</h1>
            <input type="text" placeholder='Enter a task' value={task} onChange={(e)=>setTask(e.target.value)} />
            <input type="text" placeholder='Enter a description' value={desc} onChange={(e)=>setdesc(e.target.value)}  />
            <button onClick={()=>Add()}>Add task</button>

{
    list.map((m)=>(
        <div key={m.id}>
            <h1>{m.task}</h1>
            <p>{m.description}</p>
            <button onClick={()=>Delete(m.id)}>X</button>

        </div>

    ))
}
        </section>
        <section>
            <h1>calculator</h1>
            <input type="text" value={value} readOnly  />
            <button onClick={()=>handleClick('1')}>1</button>
             <button onClick={()=>handleClick('2')}>2</button>
              <button onClick={()=>handleClick('3')}>3</button>
               <button onClick={()=>handleClick('4')}>4</button>
                <button onClick={()=>handleClick('5')}>5</button>
                 <button onClick={()=>handleClick('6')}>6</button>
                  <button onClick={()=>handleClick('7')}>7</button>
                   <button onClick={()=>handleClick('8')}>8</button>
                    <button onClick={()=>handleClick('9')}>9</button>
                     <button onClick={()=>handleClick('+')}>+</button>
                      <button onClick={()=>handleClick('-')}>-</button>
                       <button onClick={()=>handleClick('*')} >*</button>
                        <button onClick={()=>handleClick('/')}>/</button>

                         <button onClick={()=>handleClear()}>clear</button>
                         <button onClick={()=>handleResult()}>result</button>
                         <button onClick={()=>handleDelete()}>Delete</button>


        </section>
        <section className='DigitalClock'>
            <h1>{hour}:{minute}:{second}</h1>


        </section>
        <section className='quoteGenerator'>
            <button onClick={fetchApi} >{loading? <p>loading...</p> :'generate'}</button>
            <h1>{quote}</h1>


        </section>
     

    </div>
  )
}
