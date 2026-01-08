import { useEffect, useState } from "react";
import ExpenseChart from "../Component/Expense/ExpenseChart";
import Expense from "../Component/Expense/ExpenseForm";

export default function ExpensePage() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h1>💰 Expense Page</h1>

      <Expense addExpense={addExpense} />
       <ExpenseChart expenses={expenses} />

      {expenses.length === 0 && <p>No expenses yet</p>}

      {expenses.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>₹{e.amount}</p>
          <p>{e.type}</p>
          <button onClick={() => deleteExpense(e.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}
