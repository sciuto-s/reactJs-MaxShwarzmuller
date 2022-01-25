import DUMMY_EXPENSES from "./components/Expenses/expense";
import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
// function App() {

//   return React.createElement('div', {}, React.createElement('h2', {}, "Let's Go!"), React.createElement(Expenses, { items: expenses }))
//   // return (

//   //   <div>
//   //     <h2>Ok letsgo</h2>
//   //     <Expenses items={expenses}/>


//   //   </div>
//   // )
// }
const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpansehandler = (expense) => {
    // console.log('In App.js')
    // console.log(expense)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

       
  return (
    <div>
      <NewExpense onAddExpense={addExpansehandler} />
      <Expenses items={expenses} />
    </div>
  )
}
// const App = () => {
//   return (
//     React.createElement('div', {}, React.createElement(
//       'h2', {}, "Let's Go!"), React.createElement(
//         Expenses, { items: expenses }))
//   )
// }
export default App;
