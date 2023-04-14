import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses(props) {

  const [year, setYear] = useState('2023');

  const selectYearHandler = (yearSelected) =>{
    setYear(yearSelected);
  }
  

  return (
    <div className="expenses">

      <ExpensesFilter selected={year} onSelectYear={selectYearHandler}/>

      <ExpenseItem
        name={props.data[0].name}
        date={props.data[0].date}
        price={props.data[0].price}
      />
      <ExpenseItem
        name={props.data[1].name}
        date={props.data[1].date}
        price={props.data[1].price}                                             
      />
      <ExpenseItem
        name={props.data[2].name}
        date={props.data[2].date}
        price={props.data[2].price}
      />
      <ExpenseItem
        name={props.data[3].name}
        date={props.data[3].date}
        price={props.data[3].price}
      />
    </div>
  );
}

export default Expenses;
