// un component in React è una function in js che ritorna dell'html
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import React from 'react';

const ExpenseItem = (props) => {

    /////////// restituisce l'array e lo destrutturo
    // const [title, setTitle] = useState(props.title);
    // console.log('Expense item evalueted by react')
    ////////// può essere chiamata direttamente dentro questa funzione
    // let title = props.title;
    // const clickhandler = () => {
    //     console.log(props)
    //     setTitle('Updated')
    //     //il titolo cambia ma non viene riflesso nel DOM
    //     //il component è una function che ritorna JSX
    //     console.log(title)
    // }
    
    return (
        //UN SOLO ELEMENTO ROOT
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        
        </Card>
    )
}

//Per usare un component bisogna esportarlo

export default ExpenseItem;