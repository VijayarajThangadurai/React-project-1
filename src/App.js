import ExpenseItem from "./components/Expenseitem";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      location: 'Departmental Store',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', location: 'Sony Showroom', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      location:'Renault showroom',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      location: 'Classic Woods',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
        <h1>lets get started!</h1>
        {expenses.map((expenses, index) => (
        <>
        <div key= {expenses.id}> <ExpenseItem 
         title ={expenses.title}
         location={expenses.location}
         amount={expenses.amount}
         date={expenses.date}></ExpenseItem> </div> </>
        
        ))}
      
  
        
    </div>
  );
}

export default App;
