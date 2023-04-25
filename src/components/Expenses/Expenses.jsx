import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [year, setYear] = useState("2023");

  const selectYearHandler = (yearSelected) => {
    setYear(yearSelected);
  };

  const expenseByYear = props.data.filter(
    (expense) => expense.date.getFullYear() === parseInt(year)
  );

  return (
    <div className="expenses">
      <ExpensesFilter selected={year} onSelectYear={selectYearHandler} />
      <ExpenseChart expenses={expenseByYear}/>
      <ExpenseList item={expenseByYear} />
    </div>
  );
}

export default Expenses;
