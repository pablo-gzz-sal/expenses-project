import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import "./ExpenseItem.css";

function ExpenseItem({ date, title, price }) {
  return (
    <Card className="expenseItem">
      <ExpenseDate date={date} />
      <div className="expenseItemDescription">
        <h2>{title}</h2>
        <div className="expenseItemPrice">{`$${price}`}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
