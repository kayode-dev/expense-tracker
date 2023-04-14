import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const expenseAdditionHandler =(expenseItem) =>{
    const newExpense = {
      ...expenseItem,
      id: Math.random().toString()
    }

    props.onExpenseAdd(newExpense)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseAddition={expenseAdditionHandler}/>
    </div>
  );
};

export default NewExpense;
