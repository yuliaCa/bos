import styles from "./UsageChart.module.css";
import React from "react";
import { Bar } from "react-chartjs-3";
import axios from 'axios';
import { useEffect } from "react";


const UsageChart = () => {
    const bosStorage = "https://s3-us-west-2.amazonaws.com/bos-skincare";

    const getUserProductUsage = (email) => {

      let routineEachDay = {};
      let productUsedByCategory = {};
     
      let dailyUsage = [];

        axios.get(`dailyroutine/${email}`)
            .then(results => {
     
                routineEachDay = results.data;

                for (let i=0; i<routineEachDay.length; i++){
                  let category=[];

                  for (let x=0; x<routineEachDay[i].objRoutineLog.length; x++){
                    if (routineEachDay[i].objRoutineLog[x].isUsed){
                      category.push(routineEachDay[i].objRoutineLog[x].category);
                    }
                  }

                  console.log(category);
                  let counts = {};
                  category.forEach((x)=>{
                    counts[x] = (counts[x]||0) + 1;
                  });
                 console.log(counts);

                 productUsedByCategory = {
                    "overallRate":routineEachDay[i].overallRate, 
                    "dailyLogDate":(new Date(routineEachDay[i].dailyLogDate)).toLocaleDateString(),
                    "productUsage": counts
                 }
                 dailyUsage.push(productUsedByCategory);
                 console.log(dailyUsage);
                }
               
                return dailyUsage;
            }).catch(error => console.log(error));
    }

    const smileyData = [
        "sad",
        "neutral",
        "happy",
        "happy",
        "neutral",
        "happy",
        "happy",
    ];

  return (
    <div className={styles.chartStyle}>
      <Bar
        className={styles.chart}
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Cleanser",
              data: [1, 1, 1, 1, 1, 0, 1],
              backgroundColor: "rgba(243, 186, 124, 0.5)",
              borderColor: "rgba(243, 186, 124, 0.5)",
              borderWidth: 0,
            },
            {
              label: "Serum",
              data: [1, 0, 1, 0, 0, 0, 0],
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
              data: [0, 1, 1, 0, 1, 1, 0],
              backgroundColor: "rgba(247, 237, 225, 1)",
              borderColor: "rgba(247, 237, 225, 1)",
              borderWidth: 0,
            },
          ],
        }}
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
                  stepSize: 1,
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
      <div className={styles.smileyStyle}>
        <ul>
          {smileyData.map((smiley, key) => (
            <li key={key}>
              <img src={`${bosStorage}/icons/${smiley}.svg`} alt="smiley" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsageChart;