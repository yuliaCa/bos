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
              label: "Products Usage",
              data: [4, 2, 3, 3, 4, 4, 2],
              backgroundColor: "rgba(255, 206, 86, 0.3)",
              borderColor:"rgba(255, 206, 86, 1)",
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
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
