import React from 'react';
import expenses from './TestData/ExpensesData';
import ExpensesHolder from './components/Expenses/ExpensesHolder';


const App = () => {

  return React.createElement(
    'div', 
    {}, 
    React.createElement('h1', {}, 'We are just getting started!'),
    React.createElement(ExpensesHolder, { expenseObjects: expenses }),
  );
  
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <ExpensesHolder expenseObjects={expenses}/>
  //   </div>
  // );

}

export default App;
