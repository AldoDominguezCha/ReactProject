import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = event => {
        
        setEnteredTitle(event.target.value);

        //setUserInput((prevState) => ({...prevState, enteredTitle: event.target.value}));
    };

    const amountChangeHandler = event => {
        
        setEnteredAmount(event.target.value);

        //setUserInput((prevState) => ({...prevState, enteredAmount: event.target.value}));
    };

    const dateChangeHandler = event => {
        
        setEnteredDate(event.target.value);

        //setUserInput((prevState) => ({...prevState, enteredDate: event.target.value}));
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
        props.onAddedExpenseEntry(expenseData);
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Expense title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Expense amount</label>
                <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Expense date</label>
                <input type='date' min="2019-01-01" value={enteredDate} max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onFormHiding}>Cancel</button>
            <button type='submit'>Add expense</button>
        </div>
    </form>
};

export default ExpenseForm;