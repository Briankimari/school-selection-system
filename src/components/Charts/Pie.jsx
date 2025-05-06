import React, { Component } from "react";
import Chart from "chart.js/auto";

class PieChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart() {
    const { data, labels } = this.props;

    new Chart(this.chartRef.current, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "300px",
          margin: "0 auto",
        }}
      >
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default PieChart;
