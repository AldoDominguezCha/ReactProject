import React, {useState} from 'react';
import './ExpensesHolder.css';
import Card from './../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';

function ExpensesHolder(props) {

    const [yearFilter, setYearFilter] = useState('2022');

    console.log('Year to filter: ' + yearFilter);
    
    const dateFilterChangeHandler = (newYear) => {
        setYearFilter(newYear);
    };

    const expenseElements = [];
    const filteredExpenseObjects = props.expenseObjects.filter(expense => expense.date.getFullYear() === parseInt(yearFilter));
    filteredExpenseObjects.forEach(expense => {
        expenseElements.push(
            <ExpenseItem expenseObject={expense} key={expense.id}/>
        );
    });

    return(
        <div>
            <ExpenseFilter onDateFilterChange={dateFilterChangeHandler}/>
            <Card className="expenses">
                {expenseElements}
            </Card>
        </div>
    );
}

export default ExpensesHolder;