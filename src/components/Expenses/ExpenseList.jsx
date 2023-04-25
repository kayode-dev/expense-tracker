import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.item === 0) {
    return <p>No expenses found 😔</p>;
  }

  return (
    <>
      {props.item.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          name={expenses.name}
          date={expenses.date}
          price={expenses.price}
        />
      ))}
    </>
  );
};

export default ExpenseList;
