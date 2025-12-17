
import React, { useEffect, useState } from 'react'

export default function Todo() {
    const [input , setInput]= useState('')
        const [desc , setdesc]= useState('')


    const [lists,setList]=useState(()=>{
        const savedTodos = localStorage.getItem('Todos')
        return savedTodos
        ? JSON.parse(savedTodos) :
      [
        {
            id:1,
            task:'exercise',
            description:"exercise for 20 mins"

        },
        {
            id:2,
            task:"code",
            description:"regularly make atleast 1 project"


        },
        {
            id:3,
            task:"eat healthy",
            description:"eat healty food and be on balanced diet"

        }
    ]})
    useEffect(()=>{
        localStorage.setItem('Todos',JSON.stringify(lists))
    },[lists])

const handleAddTask=()=>{
    if (input.trim()===""|| desc===""){
        alert('add task and desc')
        return;
    }
    const newtask ={
        id: Date.now(),
        task : input,
        description: desc,
    }
    setList([...lists,newtask])
    setInput('')
    setdesc('')
}
const handledelete=(id)=>{
    const updatedtask = lists.filter((task)=> task.id != id)
    setList(updatedtask)
}
  return (
    <div className='text-black'>
        <div>
            <input type="text" value={input} name='input' placeholder='enter your task' onChange={(e)=>setInput(e.target.value)} />
            <textarea name='description'value={desc} placeholder='enter the description' onChange={(e)=>setdesc(e.target.value)}/>
            <button onClick={handleAddTask}>add</button>
        </div>
    {lists.map((m)=>(
        <div key={m.id}>
            <h1>{m.task}</h1>
            <p>{m.description}</p>
            <button onClick={()=>handledelete(m.id)}> X</button>
        </div>
    ))}
    </div>
    

  )
}
