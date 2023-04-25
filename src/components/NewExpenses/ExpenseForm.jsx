import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: ""
  //   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //     return { ...prevState,
    //   enteredDate: event.target.value}
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      name: title,
      date: new Date(date),
      price: +amount,
    };
    props.onExpenseAddition(newExpense);
    props.onExpenseSubmit(false);
    console.log(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const hideForm = () => {
    props.onExpenseSubmit(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-4-4"
            max="2023-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="button-right">
        <button className="new-expense__actions" onClick={hideForm}>
          Cancel
        </button>
        <button type="submit" className="new-expense__actions">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
