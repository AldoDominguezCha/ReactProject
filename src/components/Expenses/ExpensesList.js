import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {

    if (props.expenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses for this year</h2>
    }    
    
    return (
    <ul className='expenses-list'>
        {props.expenses.map(obj => <ExpenseItem expenseObject={obj} key={obj.id}/>)}
    </ul>
    );
};

export default ExpensesList;