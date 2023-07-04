import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = [
    "2016",
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
        label: "For Sale",
        backgroundColor: "#B8ECF0",
        borderColor: "#B8ECF0",
        data: [100, 75, 50, 75, 50, 75, 75, 100], 
      },
      {
        label: "For Rent",
        backgroundColor: "#B3C1D7",
        borderColor: "#B3C1D7",
        data: [90, 65, 40, 65, 40, 65, 65, 90], 
      },
      {
        label: "All",
        backgroundColor: "#FCC9BA",
        borderColor: "#FCC9BA",
        data: [60, 40, 30, 40, 30, 40, 40, 40], 
      },
    ],
  };

  const options = {
    // responsive: true,
    maintainAspectRatio : false,
    plugins: {
      legend: {
        display: false,
        // position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y:{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 25
      },
      grid: {
        color: "#eef0f2"
      }
                                
      }
    },
  }

  return (
    <div id="canvas-container">
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarChart;
