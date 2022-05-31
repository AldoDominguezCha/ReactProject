import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenseItem.css';

const NewExpenseItem = (props) => {

    const addExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: parseInt(Math.random().toString() * 100000),
        };

        props.onAddedExpenseEntry(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onAddedExpenseEntry={addExpenseDataHandler}/>
        </div>
    );
}

export default NewExpenseItem;