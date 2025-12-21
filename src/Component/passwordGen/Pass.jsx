


import React, { useState } from 'react'

export default function Pass() {
  const [pass,setPass]=useState('')
  const [length,setLength]=useState(12)
    const [options,setOptions]=useState({
      uppercase:true,
      lowercase:true,
      numbers:true,
      symbols:false,
        })
    const generatePassword = ()=>{
        const charSets = {
            uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase:'abcdefghijklmnopqrstuvwxyz',
            numbers:'0123456789',
            symbols:'!@#$%^&*()_+-=',

        };
let characters='';
if(options.uppercase) characters +=charSets.uppercase;
if(options.lowercase) characters += charSets.lowercase;
if (options.numbers) characters += charSets.numbers;
if (options.symbols) characters+=charSets.symbols;

if(characters ==='') characters += charSets.lowercase;

let newpass ='';
for(let i=0;i<length;i++){
  const randomIndex=Math.floor(Math.random()*characters.length)
  newpass += characters[randomIndex]

}
setPass(newpass)



}
const toggleOption=(optionsName)=>{
  setOptions({
    ...options,[optionsName]:!options[optionsName]
  })

  }
  return (
    <div className='text-black'>
      <h1>password generator</h1>

      <div >
        <label htmlFor="password">
          <input type="range" min='4' max='32' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/> select password range :{length}
        </label>
            <label htmlFor="uppercase">
          <input type="checkbox"  checked={options.uppercase} onChange={()=>toggleOption('uppercase')}/>upper
        </label>
            <label htmlFor="lowercase">
          <input type="checkbox"  checked={options.lowercase} onChange={()=>toggleOption('lowercase')}/>lower
        </label>
            <label htmlFor="numbers">
          <input type="checkbox"  checked={options.numbers} onChange={()=>toggleOption('numbers')}/>numbers
        </label>
            <label htmlFor="symbols">
          <input type="checkbox"  checked={options.symbols} onChange={()=>toggleOption('symbols')}/>symbols
        </label>

      </div>
      <p>{pass}</p>
      <button onClick={generatePassword}>generate</button>
    </div>
  )
}
