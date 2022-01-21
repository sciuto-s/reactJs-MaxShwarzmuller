
import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value) // trasformo array di oggetti in array di valori
    const totMaximum = Math.max(...dataPointsValues)
    
    return <div className='chart'>
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totMaximum}
                label={dataPoint.label}
            />)}
    </div>

}

export default Chart