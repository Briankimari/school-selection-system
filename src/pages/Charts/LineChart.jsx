import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentColor } = useStateContext();
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Year",
        data: [110, 204, 156, 250, 400, 170, 135],
        borderColor: "orange",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.5,
      },
      {
        label: "Mean Scores",
        data: [125, 410, 100, 310, 170, 300, 201],
        borderColor: currentColor,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.5,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        height: "300px",
        margin: "0 auto",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
