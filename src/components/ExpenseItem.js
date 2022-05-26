import './ExpenseItem.css';

function ExpenseItem(props) {

  let { title: expenseTitle, amount: expenseAmount, date: expenseDate } = props.expenseObject;
  expenseDate = expenseDate.toDateString();

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;