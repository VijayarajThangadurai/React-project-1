import React, { useState }from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails  from './ExpenseDetails';
import Card from '../UI/Card';
import './Expenseitem.css';
const ExpenseItem=(props)=>{
  const [title, setTitle] = useState(props.title);
  const[amount, setAmount]= useState(props.amount);
console.log('ExpenseItem evaluated by React');
  const ClickHandler = ()=>{
    setTitle("Updated!");
    console.log(title);
  };
  const UpdateExpense = ()=>{
    setAmount("100");
    console.log(amount);
  };
  const DeleteExpense =()=>{
    console.log("Deleted!!!..");
  };
    return ( 
          <Card className="expense-item">
            <ExpenseDate date={props.date}/>
           <ExpenseDetails title={title} 
           location ={props.location} 
           amount={amount}/>
           <button onClick={ClickHandler}>Change Title</button>
           <button onClick={DeleteExpense}>Delete Expense</button>
           <button onClick={UpdateExpense}>Change Price</button>
            </Card>
    
    );
}
 export default ExpenseItem;
