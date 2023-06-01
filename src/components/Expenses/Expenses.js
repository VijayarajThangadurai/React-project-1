import React,{ useState } from 'react';
import ExpenseItem from "./Expenseitem";
import ExpenseFilter from './ExpenseFilter';
import Card from "../UI/Card";
import './Expenses.css';
const  Expenses = (props) =>{
 const [filteredYear, setFilteredYear]= useState('2020');
 const filterChangeHandler = selectedYear => {
  setFilteredYear(selectedYear);
 };
 return (
      <Card className="expenses">
        <ExpenseFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}/>
           <ExpenseItem 
           title = {props.item[0].title}
           location= {props.item[0].location}
           amount = {props.item[0].amount}
           date = {props.item[0].date}
           />
            <ExpenseItem 
           title = {props.item[1].title}
           location= {props.item[1].location}
           amount = {props.item[1].amount}
           date = {props.item[1].date}
           />
            <ExpenseItem 
           title = {props.item[2].title}
           location= {props.item[2].location}
           amount = {props.item[2].amount}
           date = {props.item[2].date} 
           />
            <ExpenseItem 
           title = {props.item[3].title}
           location= {props.item[3].location}
           amount = {props.item[3].amount}
           date = {props.item[3].date}
           />
        
        
      </Card>
    )
}

export default Expenses;