import React, { useState } from "react"
import './ExpenseForm.css'




const ExpenseForm = (props) => {

    // ------------------------------------------->>>>

    const [entredTitle, setEntredTitle] = useState('')
    const [entredAmount, setEntredAmount] = useState('')
    const [entredDate, setEntredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     entredTitle: '',
    //     entredAmount: '',
    //     entredDate: ''
    // })

    // ------------------------------------------->>>>

    const titleChangeHandler = (event) => {
        // -- PRIMA
        // console.log(event)
        // console.log(event.target.value)
        setEntredTitle(event.target.value)

        // -- DOPO
        // setUserInput({
        //     ...userInput,
        //     entredTitle: event.target.value
        // })

        // -- IMPOSTATA MEGLIO
        // per memorizzare i dati inseriti in input 
        // setUserInput((prevState) => { 
        //     return { ...prevState, entredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (event) => {
        // -- PRIMA
        setEntredAmount(event.target.value)

        // -- DOPO
        // setUserInput({
        //     ...userInput,
        //     entredAmount: event.target.value
        // })
        // console.log(userInput)
    }
    const dateChangeHandler = (event) => {
        // -- PRIMA
        setEntredDate(event.target.value)
        // -- DOPO
        // setUserInput({
        //     ...userInput,
        //     entredDate: event.target.value
        // })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const expenseData = {
            title: entredTitle,
            amount: +entredAmount,
            date: new Date(entredDate)
        }
            props.onSaveExpenseData(expenseData);
        // console.log(expenseData)
        // -- Per svuotare i campo input
        setEntredTitle('')
        setEntredAmount('')
        setEntredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'
                        value={entredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number'
                        value={entredAmount}
                        min='0.01' step='0.01' 
                        onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date'
                        value={entredDate}
                        min="2009-01-01" max="2022-12-31" 
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button type="button" onClick={props.onCancel}>Delete</button>
            </div>
        </form>
    )
}
export default ExpenseForm