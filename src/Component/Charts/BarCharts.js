import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Charts.css'

const BarCharts = () => {

    const barChartData = {
        labels: ["January", "February", "March","April","May"],
        datasets: [
          {
            data: [37, 31, 26, 29, 20],
            label: "Monthly Visitors",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true
          }
        ]
    }
    
  return (
    <div className='bars'>
        <Bar
      type="bar"
      width={130}
      height={80}
      options={{
        title: {
          display: true,
          text: "Monthly Visitors",
          fontSize: 15
        },
        legend: {
          display: true, 
          position: "top" 
        }
      }}
      data={barChartData}
    />
    </div>
  )
}

export default BarCharts