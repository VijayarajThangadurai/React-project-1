import React, { useState } from 'react';
import ExpenseItem from './Expenseitem';
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
  // console.log(props.item, "IN Expenses");
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear);

   

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList item={filteredExpenses}/>
        
        {/* {filteredExpenses.length === 0 ? (<p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              location={expense.location}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {filteredExpenses.length === 1 ? (<p>Only a Single Expense Here. Please add more..."</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              location={expense.location}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}

      </Card>
    </div>
  );
};

export default Expenses;