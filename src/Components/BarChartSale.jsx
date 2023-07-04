import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChartSale = () => {
  const labels = [
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
        backgroundColor: "#03a9f3",
        borderColor: "#03a9f5",
        data: [0.2,10, 8, 12, 8, 10, 14],
        barThickness: 3, 
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    lineWidth: 1,
    plugins: {
      legend: {
        display: false,
      },
      
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border:{
          display:false
        },
        
      },
      y:{
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border:{
          display:false
        }
                                
      }
    },
  }

  return (
    <div className="w-[88px] ml-auto">
      <Bar
        data={data}
        options={options}
        width={"50%"}
      />
    </div>
  );
};

export default BarChartSale;
