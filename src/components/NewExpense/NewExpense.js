import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function NewExpense(props) {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (expenseDataEntered) => {
    const expenseData = {
      ...expenseDataEntered,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const editingButtonHandler = () => {
    setEditing(true);
  };

  const cancelEditingHandler = () => {
    setEditing(false);
  };

  return (
    <div className="newExpense">
      {!editing && (
        <button onClick={editingButtonHandler}>Add New Expense</button>
      )}
      {editing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
