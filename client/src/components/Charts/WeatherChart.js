import styles from "./WeatherChart.module.css";
import React from "react";
import { Bar } from "react-chartjs-3";

const WeatherChart = () => {
  return (
    <div className={styles.chartStyle}>
      <Bar
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Weather",
              data: [24, 62, 39, 43, 23, 76, 34],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
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

export default WeatherChart;
