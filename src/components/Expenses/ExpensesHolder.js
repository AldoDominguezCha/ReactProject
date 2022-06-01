import React, {useState} from 'react';
import './ExpensesHolder.css';
import Card from './../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function ExpensesHolder(props) {

    const [yearFilter, setYearFilter] = useState('2019');
    
    const dateFilterChangeHandler = newYear => {
        setYearFilter(newYear);
    };

    
    const filteredExpenseObjects = props.expenseObjects.filter(expense => expense.date.getFullYear() === parseInt(yearFilter));
    
    
    //const expenseElements = [];
    // filteredExpenseObjects.forEach(expense => {
    //     expenseElements.push(
    //         <ExpenseItem expenseObject={expense} key={expense.id}/>
    //     );
    // });

    return(
        <div>
            <Card className="expenses">
            <ExpenseFilter selected={yearFilter} onDateFilterChange={dateFilterChangeHandler}/>
            <ExpensesList expenses={filteredExpenseObjects}/>
            </Card>
        </div>
    );
}

export default ExpensesHolder;