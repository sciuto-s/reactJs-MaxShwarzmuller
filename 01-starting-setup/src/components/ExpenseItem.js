// un component in React è una function in js che ritorna dell'html
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2, 28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 249.67
    // const month =  props.date.toLocaleString('en-US', { month: 'long' }) 
    // const year =  props.date.getFullYear()
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' })

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