import './Expenseitem.css';

function Expenseitem(props) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">{props.date.toISOString()}</div>
        <h2>{props.tilte}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default Expenseitem;
