import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails  from './ExpenseDetails';
import Card from '../UI/Card';
import './Expenseitem.css';
const ExpenseItem=(props)=>{
  const ClickHandler = ()=>{
    console.log("Clicked!!!..");
  };
  const DeleteExpense =()=>{
    console.log("Deleted!!!..");
  };
    return ( 
          <Card className="expense-item">
            <ExpenseDate date={props.date}/>
           <ExpenseDetails title={props.title} 
           location ={props.location} 
           amount={props.amount}/>
           <button onClick={ClickHandler}>Change Title</button>
           <button onClick={DeleteExpense}>Delete Expense</button>
            </Card>
    
    );
}
 export default ExpenseItem;
