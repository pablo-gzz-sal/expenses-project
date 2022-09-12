import React, { useState } from "react";
import "./styles.css";
import ExpenseItemAll from "./components/ExpenseItemAll/ExpenseItemAll";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 4, 7)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 3) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 11, 25)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 8, 10)
  },
  {
    id: "e5",
    title: "Microwave",
    amount: 194.12,
    date: new Date(2022, 4, 7)
  }
];

export default function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const handleFilterData = (expense) => {
    console.log("filter data")
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemAll expenses={expenses} />
    </div>
  );
}
