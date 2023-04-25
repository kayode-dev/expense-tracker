import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense'

function App() {
  const STATIC_DATA = [
    {
      id: 1,
      name: "Car Insurance",
      date: new Date(2023, 3, 21),
      price: 300.56,
    },
    { id: 2, name: "Rent", date: new Date(2023, 3, 21), price: 143.21 },
    {
      id: 3,
      name: "Wifi Subscription",
      date: new Date(2023, 3, 21),
      price: 80,
    },
    { id: 4, name: "Furniture", date: new Date(2023, 3, 21), price: 150.99 },
  ];

  const [expenseData, setExpenseData] = useState(STATIC_DATA);

  const expenseAddHandler = expense =>{
    setExpenseData(prevExpense =>{
      return [expense, ...prevExpense]
    })
  }

  return (
    <div className="App">
      <NewExpense onExpenseAdd={expenseAddHandler}/>
      <Expenses data ={expenseData}/>
    </div>
  );
}

export default App;
