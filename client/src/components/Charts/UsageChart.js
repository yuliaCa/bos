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
              backgroundColor: "rgba(209, 152, 136, 0.3)",
              borderColor:"rgba(255, 206, 86, 1)",
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
              right: 230,
              bottom: 50,
            },
          },
          scales: {
            xAxes: [
              {
                gridLines: false,
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: false,
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default UsageChart;
