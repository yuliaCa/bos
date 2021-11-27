import styles from "./WeatherChart.module.css";
import React from "react";
import { Bar } from "react-chartjs-3";

const WeatherChart = (props) => {
  // Historical Data Input
  const randT = () => Math.round(Math.random() * (12 - 0) + 0);
  const randH = () => Math.round(Math.random() * (100 - 70) + 70);

  let weatherChartRaw = {
    tempData: [randT(), randT(), randT(), randT(), randT(), randT(), randT()],
    humData: [randH(), randH(), randH(), randH(), randH(), randH(), randH()],
  };

  let weatherChartData = [];

  // Fit Data to Weather Chart
  for (const [key, value] of Object.entries(weatherChartRaw)) {
    let array = value;
    switch (props.currentDay) {
      case "Sun":
        weatherChartData.push(array.slice(0, 1));
        break;
      case "Mon":
        weatherChartData.push(array.slice(0, 2));
        break;
      case "Tue":
        weatherChartData.push(array.slice(0, 3));
        break;
      case "Wed":
        weatherChartData.push(array.slice(0, 4));
        break;
      case "Thu":
        weatherChartData.push(array.slice(0, 5));
        break;
      case "Fri":
        weatherChartData.push(array.slice(0, 6));
        break;
      case "Sat":
        weatherChartData.push(array.slice(0, 7));
        break;
      default:
        weatherChartData.push(array);
        break;
    }
  }

  let temperatureData = weatherChartData[0];

  let humidityData = weatherChartData[1];

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        type: "bar",
        label: "Temperature °C",
        backgroundColor: "rgba(243, 186, 124, 0.5)",
        borderColor: "rgba(243, 186, 124, 0)",
        borderWidth: 0,
        data: temperatureData,
      },
      {
        type: "line",
        label: "Humidity %",
        borderColor: "rgb(209, 152, 136)",
        borderWidth: 2,
        fill: false,
        data: humidityData,
      },
    ],
  };

  return (
    <div className={styles.chartStyle}>
      <Bar
        data={data}
        height={200}
        width={400}
        options={{
          maintainAspectRatio: true,
          layout: {
            padding: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: true,
                  drawBorder: true,
                  drawOnChartArea: false,
                },
              },
            ],
            yAxes: [
              {
                position: "left",
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: true,
                  drawBorder: true,
                  drawOnChartArea: false,
                },
              },
              {
                display: false,
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
