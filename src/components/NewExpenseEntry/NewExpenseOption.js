import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenseOption.css';

const NewExpenseOption = props => {

    const [formVisible, setFormVisible] = useState(false);

    const newExpenseHandler = newExpense => {
        props.onAddedExpenseEntry(newExpense);
        setFormVisible(false);
    }

    const addNewExpenseClickHandler = () => {
        setFormVisible(true);
    }

    const hideFormHandler = () => {
        setFormVisible(false);
    }

    if (formVisible) {
        return <ExpenseForm onAddedExpenseEntry={newExpenseHandler} onFormHiding={hideFormHandler}/>
    }

    return (
        <div>
            <button onClick={addNewExpenseClickHandler}>Add new expense</button>
        </div>
    );

};

export default NewExpenseOption;