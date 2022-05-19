import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Charts.css'

function LineChart() {

  const state = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'iPhone',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(90,72,120,0.3)',
        borderColor: 'rgba(0,0,0,0.5)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
      {
        label: 'Tecno',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(25,92,40,0.5)',
        borderColor: 'rgba(0,0,0,0.5)',
        borderWidth: 2,
        data: [45, 70, 50, 40, 30]
      },
      {
        label: 'Infinix',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(255,191,0,0.4)',
        borderColor: 'rgba(0,0,0,0.5)',
        borderWidth: 2,
        data: [20, 35, 85, 65, 15]
      }
    ],
  };

  return (
    <div className='bars'>
      <Line
        type='line'
        width={160}
        height={80}
        options={{
          title: {
            display: true,
            text: 'Average number of phones bought in a month',
            fontSize: 20,
            position: 'right'
          },
          legend: {
            display: true,
            position: 'top'
          }
        }}
        data={state} />
    </div>
  );
}

export default LineChart