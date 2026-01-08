import React from 'react'
import {Pie} from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement,Tooltip,Legend);

export default function ExpenseChart({expenses}) {
    const totalIncome = expenses.filter((e)=>e.type==="income")
    .reduce((acc,e)=>acc+e.amount,0);
    const totalExpense = expenses.filter((e)=>e.type==="expenses")
    .reduce((acc,e)=>acc+e.amount,0);
    const data = {
        labels:["income","expenses"],
        datasets:[
            {
                label:'Amount',
                data:[totalIncome,totalExpense],
                 backgroundColor: ["#4caf50", "#f44336"], 
                 borderWidth:1,
                
            }
        ]
    }
  return (
    <div>
<h1>expense chart</h1>  
<Pie data={data}/> </div>
  )
}
