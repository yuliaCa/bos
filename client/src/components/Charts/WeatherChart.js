import styles from "./WeatherChart.module.css";
import React from "react";
import { Bar } from "react-chartjs-3";

const rand = () => Math.round(Math.random() * 10);

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      type: "bar",
      label: "Temperature",
      backgroundColor: "rgba(243, 186, 124, 0.5)",
      borderColor: "rgba(243, 186, 124, 0)",
      borderWidth: 0,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: "line",
      label: "Humidity",
      borderColor: "rgb(209, 152, 136)",
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
};

const WeatherChart = () => {
  return (
    <div className={styles.chartStyle}>
      <Bar
        data={data}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: true,
          layout: {
            padding: {
              top: 100,
              left: 200,
              right: 200,
              bottom: 100,
            },
          },
          scales: {
            yAxes: [
              {
                position: "left",
                ticks: {
                  beginAtZero: true,
                },
              },
              {
                position: "right",
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
