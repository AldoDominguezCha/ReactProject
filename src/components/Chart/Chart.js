import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dp => dp.value)
    const totalMaximum = Math.max(...dataPointValues);

    return ( 
        <div className='chart'>
            {props.dataPoints.map(dp => <ChartBar value={dp.value} maxValue={totalMaximum} label={dp.label} key={dp.label} />)}
        </div>
    );
};

export default Chart;