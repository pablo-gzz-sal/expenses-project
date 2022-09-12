import React, { useState } from "react";
import "./ExpenseItemAll.css";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseList from "../ExpenseList/ExpenseList";

function ExpenseItemAll({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearArray = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expensesItemAll">
        <ExpensesFilter
          filteredYear={filteredYear}
          onFilterChangeHandler={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredYearArray} />
        <ExpenseList filteredYearArray={filteredYearArray} />
      </Card>
    </div>
  );
}

export default ExpenseItemAll;
