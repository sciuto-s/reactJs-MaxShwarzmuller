
import './Expense.css'
import Card from "../UI/Card";
import React, { useState } from "react"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filtredYear, setFiltredYear] = useState('2019')

    const filterYearHandler = (selectedYear) => {
        // console.log('In ecpenses.js')
        console.log(selectedYear)
        setFiltredYear(selectedYear)
        //console.log(props)
    }
    const filtredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filtredYear
    })

    // let expensesContent = <p>No expenses found.</p>

    // if (filtredExpenses.length > 0) {
    //     expensesContent = filtredExpenses.map(expense =>
    //         <ExpenseItem
    //             key={expense.id}
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     )
    // }

    return (
        <div>
            <Card className="expenses">

                <ExpensesFilter
                    selected={filtredYear}
                    onChangeYear={filterYearHandler}
                    onFilter={filterYearHandler}
                />
                <ExpensesList items={filtredExpenses}/>
                {/* {filtredExpenses.length === 0 && <p>No expenses found.</p>}
                {filtredExpenses.length > 0 && {expensesContent}} */}

            </Card>
        </div>
    )
}

export default Expenses