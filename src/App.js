import React, {useState} from 'react';
import expenses from './TestData/ExpensesData';
import ExpensesHolder from './components/Expenses/ExpensesHolder';
import NewExpenseItem from './components/NewExpenseEntry/NewExpenseItem';


const App = () => {

  const [expensesData, setExpensesData] = useState(expenses);

  const addExpenseDataHandler = (addedExpenseEntry) => {
    setExpensesData((prevState) => {
      return [...prevState, addedExpenseEntry];
    });
  };

  return React.createElement(
    'div', 
    {}, 
    React.createElement(NewExpenseItem, { onAddedExpenseEntry: addExpenseDataHandler}),
    React.createElement(ExpensesHolder, { expenseObjects: expensesData }),
  );
  
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <ExpensesHolder expenseObjects={expenses}/>
  //   </div>
  // );

}

export default App;
