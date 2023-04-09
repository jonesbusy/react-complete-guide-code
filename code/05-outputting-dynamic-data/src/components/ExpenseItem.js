import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2023, 2, 28);
  const expenseTitle = 'Health Insurance';
  const expenseAmount = 456.67;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>CHF {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
