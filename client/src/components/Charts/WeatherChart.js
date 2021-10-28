import styles from "./WeatherChart.module.css";
import React from "react";
import { Bar } from "react-chartjs-3";

const randT = () => Math.round(Math.random() * 31);
const randH = () => Math.round(Math.random() * 100);

let temperatureData = [
  randT(),
  randT(),
  randT(),
  randT(),
  randT(),
  randT(),
  randT(),
];

let humidityData = [
  randH(),
  randH(),
  randH(),
  randH(),
  randH(),
  randH(),
  randH(),
];

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      type: "bar",
      label: "Temperature",
      backgroundColor: "rgba(243, 186, 124, 0.5)",
      borderColor: "rgba(243, 186, 124, 0)",
      borderWidth: 0,
      data: temperatureData,
    },
    {
      type: "line",
      label: "Humidity",
      borderColor: "rgb(209, 152, 136)",
      borderWidth: 2,
      fill: false,
      data: humidityData,
    },
  ],
};

const WeatherChart = () => {
  return (
    <div className={styles.chartStyle}>
      <Bar
        data={data}
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
                gridLines: false,
              },
            ],
            yAxes: [
              {
                position: "right",
                ticks: {
                  beginAtZero: true,
                  steps: 3,
                  stepsValue: 33,
                  max: 99,
                },
                gridLines: false,
                suggestedMax: 35,
              },
              {
                position: "left",
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

export default WeatherChart;
