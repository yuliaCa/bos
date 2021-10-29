import styles from "./UsageChart.module.css";
import React from "react";
import { Bar } from "react-chartjs-3";

const UsageChart = () => {
  return (
    <div className={styles.chartStyle}>
      <Bar
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Cleanser",
              data: [1, 2, 1, 2, 1, 0, 1],
              backgroundColor: "rgba(243, 186, 124, 0.5)",
              borderColor: "rgba(243, 186, 124, 0.5)",
              borderWidth: 0,
            },
            {
              label: "Serum",
              data: [1, 1, 1, 0, 1, 0, 1],
              backgroundColor: "rgba(209, 152, 136, 0.5)",
              borderColor: "rgba(209, 152, 136, 0.5)",
              borderWidth: 0,
            },
            {
              label: "Toner",
              data: [1, 0, 1, 1, 1, 0, 1],
              backgroundColor: "rgba(182, 139, 125, 0.7)",
              borderColor: "rgba(182, 139, 125, 0.7)",
              borderWidth: 0,
            },
            {
              label: "Cream",
              data: [1, 1, 1, 0, 1, 1, 0],
              backgroundColor: "rgba(247, 237, 225, 1)",
              borderColor: "rgba(247, 237, 225, 1)",
              borderWidth: 0,
            },
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: true,
          layout: {
            padding: {
              top: 50,
              left: 200,
              right: 200,
              bottom: 50,
            },
          },
          scales: {
            xAxes: [
              {
                stacked: true,
                gridLines: {
                  display: true,
                  drawBorder: true,
                  drawOnChartArea: false,
                },
              },
            ],
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: true,
                  drawBorder: true,
                  drawOnChartArea: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default UsageChart;
