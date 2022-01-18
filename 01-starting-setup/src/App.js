import expenses from "./components/expense";
import Expenses from "./components/Expenses";
function App() {
  
  return (
    <div>
      <h2>Ok letsgo</h2>
      <Expenses items={expenses}/>
      

    </div>
  )
}

export default App;
