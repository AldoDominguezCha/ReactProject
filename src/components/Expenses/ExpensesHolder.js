import React from 'react';
import './ExpensesHolder.css';
import Card from './../UI/Card';
import ExpenseItem from './ExpenseItem';

function ExpensesHolder(props) {

    const expenseElements = [];
    props.expenseObjects.forEach(expense => {
        expenseElements.push(
            <ExpenseItem expenseObject={expense} key={expense.id}/>
        );
    });

    return(
        <Card className="expenses">
            {expenseElements}
        </Card>
    );
}

export default ExpensesHolder;