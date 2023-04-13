import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props){

    const [name, setName] = useState(props.name);

    const clickHandler = () =>{
        setName("Sum New!");
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description '>
                <h2>{name}</h2>
                <div className='expense-item__price'>${props.price}</div>
            </div>
            <button onClick={clickHandler}>Click Me!</button>
        </div>
    );
}

export default ExpenseItem;