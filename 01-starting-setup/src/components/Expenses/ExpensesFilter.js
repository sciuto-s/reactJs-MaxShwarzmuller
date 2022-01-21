import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    // const [entredYear, setEntredYear] = useState('')
    //console.log(props)
    const yearChangeHandler = (e) => {
        // console.log(e.target.value)
        // setEntredYear(e.target.value)
        props.onChangeYear(e.target.value)
    }
    // const expenseYear = {
    //     year: entredYear
    // }
    // props.onChangeYear(expenseYear)

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;