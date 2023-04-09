import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('fr-US', { month: '2-digit'});
  const day = props.date.toLocaleString('fr-US', { day: '2-digit' });
  const year = props.date.toLocaleString('fr-US', { year: 'numeric' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
 