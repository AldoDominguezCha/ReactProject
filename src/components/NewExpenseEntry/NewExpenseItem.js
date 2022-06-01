import React from 'react';
import NewExpenseOption from './NewExpenseOption';
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
            <NewExpenseOption onAddedExpenseEntry={addExpenseDataHandler} />
        </div>
    );
}

export default NewExpenseItem;