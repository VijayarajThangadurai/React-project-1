import './Expenseitem.css';
function ExpenseItem(){
    const expenseDate = new Date(2023, 2,28);
    const expenseTitle = "Car Insurance";
    const expenseAmount= "294.67";
    const expenseLocation ="Car Showroom";

    return ( 
          <div className="expense-item">
            <div><h3>{expenseDate.toISOString()}</h3></div>
           <div className="expense-item__description">
           <h2>{expenseTitle}</h2>
           <div className="expense-item__location"><h2>{expenseLocation}</h2></div>
           <div className="expense-item__price">${expenseAmount}</div>
          
             </div>
             </div>
             
    );
}
 export default ExpenseItem;