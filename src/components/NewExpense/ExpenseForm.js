import React, {useState} from'react';
import './ExpenseForm.css';
const ExpenseForm = ()=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enetredAmount, setEnteredAmount] = useState('');
    const [enetredDate, setEntredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     setEnteredTitle: '',
    //     setEnteredAmount: '',
    //     setEntredDate: '',

    //  }) ;
        const titleChangeHandler=(event)=>{
          setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput((prevState)=>{
        //      return {...prevState, enteredTitle:event.target.value};
        // });
        };
        const amountChangeHandler=(event)=>{
            setEnteredAmount(event.target.value);
            // setUserInput({
            //     ...userInput,
            //     enteredAmount: event.target.value,
            // });
          };
          const dateChangeHandler=(event)=>{
            setEntredDate(event.target.value);
            // setUserInput({
            //     ...userInput,
            //     enteredDate: event.target.value,
            // });
          };
return (
<form>
    <div className="new-expense__controls">
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number"onChange={amountChangeHandler} min="0.01" step="0.01"/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date"  onChange={dateChangeHandler} min = "2019-01-01" max="2022-12-31" />
        </div>
    </div>
    <div className='new-expense__actions'/>
    <button type ="submit">Add Expense</button>
</form>
);
 };

 export default ExpenseForm;