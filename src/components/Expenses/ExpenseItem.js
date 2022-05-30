import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './../UI/Card';
import './ExpenseItem.css';


function ExpenseItem(props) {

  console.log('ExpenseItem evaluated by React. Item ID: ' + props.expenseObject.id);

  let { title: expenseTitle, amount: expenseAmount, date: expenseDate } = props.expenseObject;
  
  const [title, setTitle] = useState(expenseTitle); //Array destructuring 
  //usign the state hook to render the compoent again when calling setTitle, we provide the initial state as 'expenseTitle' 
  
  const clickHandler = () => {
    setTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;