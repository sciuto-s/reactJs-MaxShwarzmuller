// un component in React è una function in js che ritorna dell'html
import './ExpenseItems.css'


function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28)
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 249.67

    return (
        //UN SOLO ELEMENTO ROOT
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    )
}

//Per usare un component bisogna esportarlo

export default ExpenseItem;