import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(props.date);
  const year = props.date.getFullYear();
  const day = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(props.date);

  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;