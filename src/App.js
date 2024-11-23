import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (description.trim() && amount.trim()) {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setDescription("");
      setAmount("");
    }
  };

  const getTotal = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={addExpense} style={{ padding: "10px" }}>
        Add Expense
      </button>

      <h2 style={{ marginTop: "30px" }}>Expenses</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {expenses.map((expense, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {expense.description}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Total: ${getTotal()}</h2>
    </div>
  );
}

export default App;
