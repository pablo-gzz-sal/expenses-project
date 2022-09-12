import React from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";

function ExpenseList({ filteredYearArray }) {
  if (filteredYearArray.length === 0) {
    return (
      <div>
        <h2 className="emptyMessage">You have no items for this year :(</h2>
        {console.log("hola")}
      </div>
    );
  } else {
    return (
      <ul>
        {filteredYearArray.map((expense) => (
          <ExpenseItem
            title={expense.title}
            price={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </ul>
    );
  }
}

export default ExpenseList;
