import React,{ useState } from 'react';
import ExpenseItem from "./Expenseitem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import './Expenses.css';
const  Expenses = (props) =>{
 const [filteredYear, setFilteredYear]= useState('2020');
 const filterChangeHandler = selectedYear => {
  setFilteredYear(selectedYear);
 };

 
 return (
  <div>
      <Card className="expenses">
        <ExpensesFilter 
        selected = {filteredYear} 
        onChangeFilter={filterChangeHandler}
        />
        {props.item.map((expense) => (
          <ExpenseItem 
          key ={expense.id}
          title={expense.title}
          location={expense.location}
          amount={expense.amount}
          date={expense.date}
         />
         ))}
      </Card>
      </div>
    );
};

export default Expenses;