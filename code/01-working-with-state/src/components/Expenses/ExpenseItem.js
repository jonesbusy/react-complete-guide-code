import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const [ammount, setAmmount] = useState(props.amount);

  const reset = title => {
    setTitle('Removed')
    setAmmount(0)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${ammount}</div>
      </div>
      <button onClick={reset}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
