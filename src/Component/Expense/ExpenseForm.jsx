import React, { useState } from 'react'

export default function Expense({addExpense}) {
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const[type,setType]=useState("expense")
    const handleSubmit=(e)=>{
        e.preventDefault();
        addExpense({
            id: Date.now(),
            title,
            amount:Number(amount),
            type,
        });
        setTitle('')
        setAmount('')
        setType('expense');

    }
  return (
<form onSubmit={handleSubmit}>
    <input type="text" placeholder='title of the expense' value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input type="number" placeholder='Enter the amount' value={amount} onChange={(e)=>setAmount(e.target.value)} />
    <select value={type} onChange={(e)=>setType(e.target.value)}>
        <option value="expenses">Expense</option>
        <option value="income">income</option>
    </select>
    <button type='submit' >Add</button>
</form>
  )
}
