import React from 'react';
import ExpenseItem from './Expenseitem';
const ExpensesList = props =>{
let expensesContent = <p>No Expenses Found.</p>;
if(props.item.length===0) {
  return <h2 className='expenses-list__fallback'>Found No Expenses.</h2>;
}

return  (
<ul className='expenses-list'>
    {props.item.map((expense) => (
   <ExpenseItem
   key={expense.id}
   title={expense.title}
   location={expense.location}
   amount={expense.amount}
   date={expense.date}
 />
))}
</ul>
);
    };

export default ExpensesList;