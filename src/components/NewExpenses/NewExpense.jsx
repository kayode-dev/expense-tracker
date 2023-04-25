import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseAdditionHandler = (expenseItem) => {
    const newExpense = {
      ...expenseItem,
      id: Math.random().toString(),
    };

    props.onExpenseAdd(newExpense);
  };

  const showExpenseForm = () => {
    setviewFormState(true);
  };

  const hideExpenseForm =(mode) =>{
    setviewFormState(mode);
  }

  const [viewFormState, setviewFormState] = useState(false);

  if (viewFormState) {
    return (
      <div className="new-expense">
        <ExpenseForm onExpenseAddition={expenseAdditionHandler} onExpenseSubmit={hideExpenseForm}/>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button onClick={showExpenseForm}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
