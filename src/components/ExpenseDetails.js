import './ExpenseDetails.css';
export const ExpenseDetails = (props)=>{
    const {amount,location,title} = props; 
        return (
            <div className='expense-item__details'>
                <div className='expense-item__title'>{title}</div>
                <div className='expense-item__location'>{location}</div>
                <div className='expense-item__amount'>{amount}</div>
                </div>
        );
}