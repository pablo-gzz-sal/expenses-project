import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandleChange = (e) => {
    setTitle(e.target.value);
  };
  const amountHandleChange = (e) => {
    setAmount(e.target.value);
  };
  const dateHandleChange = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formControls">
        <div className="formControl">
          <label>Title</label>
          <input type="text" onChange={titleHandleChange} value={title} />
        </div>
        <div className="formControl">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandleChange}
            value={amount}
          />
        </div>
        <div className="formControl">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-11-31"
            onChange={dateHandleChange}
            value={date}
          />
        </div>
      </div>
      <div className="formActions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
      <div className="formActions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
