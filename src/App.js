import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      name: "Car Insurance",
      date: new Date(2023, 3, 21),
      price: 300.56,
    },
    { id: 2, name: "Rent", date: new Date(2023, 3, 21), price: 143.21 },
    {
      id: 3,
      name: "Wifi Subscription",
      date: new Date(2023, 3, 21),
      price: 80,
    },
    { id: 4, name: "Furniture", date: new Date(2023, 3, 21), price: 150.99 },
  ];

  return (
    <div className="App">
      <h2>Learning React</h2>
      <Expenses data ={expenses}/>
    </div>
  );
}

export default App;
