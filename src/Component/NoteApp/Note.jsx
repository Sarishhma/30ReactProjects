
import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";


export default function Note() {

    const [Text,setWritten]=useState(()=>{
        const savedNotes = localStorage.getItem('notes')
        return(savedNotes) ? JSON.parse(savedNotes):[]
    })
    const[title,settitle]=useState('')
    const [notes,setNotes]=useState('')
    const [editingID,seteditingID]=useState(null)

    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(Text))

    },[Text])

    const addNotes = ()=>{
    if(notes===""||title==="")
        return;
    if(editingID!== null){
        setWritten(prev=>prev.map((note)=>
            note.id===editingID ? {...note,title,note:notes}:note))
        seteditingID(null)
    }else{
        setWritten(prev=>[
            ...prev,
            {id: Date.now(),title,note:notes}
        ])
    }

   
    setNotes('')
    settitle('')
    }
const remove =(id)=>{
const filterNotes=Text.filter((prev)=>prev.id!=id);
setWritten(filterNotes)

}
const editing=(note)=>{
    setNotes(note.note);
    settitle(note.title);
    seteditingID(note.id);
}
  return (
    <div>
        <h1>Note App</h1>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)}/>
          <textarea name="notes"  placeholder='Enter your notes' value={notes} onChange={(e)=>setNotes(e.target.value)}   style={{ width: "50%", height: "150px" }}></textarea>
          <div>
            <ReactMarkdown>{notes||"markdown preview..."}</ReactMarkdown>
          </div>
          <button onClick={()=>addNotes()}>{editingID !== null ? 'update notes':'add notes'}</button>
          <hr />
          {Text.map((m)=>(
          <div key={m.id}>
              <p>{m.title}</p>
            <p>{m.note}</p>
            <button onClick={()=>remove(m.id)} >X</button>
            <button onClick={() => editing(m)}>Edit</button>

          </div>
          ))}

    </div>
  )
}
