import React from "react";
import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expenseDate">
      <div className="expenseDateMonth">{month}</div>
      <div className="expenseDateDay">{day}</div>
      <div className="expenseDateYear">{year}</div>
    </div>
  );
}

export default ExpenseDate;
