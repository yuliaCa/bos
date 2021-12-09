import styles from "./UsageChart.module.css";
import React from "react";
import { Bar } from "react-chartjs-3";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaCodeBranch } from "react-icons/fa";

const UsageChart = (props) => {
    const bosStorage = "https://s3-us-west-2.amazonaws.com/bos-skincare";

    let routineEachDay = {};
    let productUsedByCategory = {};

    let dailyUsage = [];

    const [productUsageData, setProductUsageData] = useState([]);

    const getUserProductUsage = () => {
        axios
            .get(
                `https://bos-project2.herokuapp.com/dailyroutine/${localStorage.email}`
            )
            .then((results) => {
                routineEachDay = results.data;

                for (let i = 0; i < routineEachDay.length; i++) {
                    let category = [];

                    for (let x = 0; x < routineEachDay[i].objRoutineLog.length; x++) {
                        if (routineEachDay[i].objRoutineLog[x].isUsed) {
                            category.push(routineEachDay[i].objRoutineLog[x].category);
                        }
                    }

                    // console.log(category);
                    let counts = {};
                    category.forEach((x) => {
                        counts[x] = (counts[x] || 0) + 1;
                    });
                    // console.log(counts);

                    productUsedByCategory = {
                        overallRate: routineEachDay[i].overallRate,
                        dailyLogDate: new Date(
                            routineEachDay[i].dailyLogDate
                        ).toLocaleDateString(),
                        productUsage: counts,
                    };
                    dailyUsage.push(productUsedByCategory);

                }
                console.log(dailyUsage);
                getUsageForChart(dailyUsage);
                return dailyUsage;
            })
            .catch((error) => console.log(error));
    };

  
    const getUsageForChart = (rawData) =>{

      let arrayWeeklyUsage = [];
      let arrayDayUsage = {};
      let arrayMask = [];
      let arrayCleanser = [];
      let arrayTreatment = [];
      let arrayMoisturizer= [];
      let arrayEyecare = [];
      let arraySunscreen = [];
      let Mask = 0;
      let Cleanser = 0;
      let Treatment = 0
      let Moisturizer = 0
      let Eyecare = 0;
      let Sunscreen = 0;
    
      for (let i = 0; i < rawData.length; i++) {
      
        for (const [key, value] of Object.entries(rawData[i].productUsage)) {
      
          switch(key) {
            case "Mask":
              Mask = Mask + value;
              break;
            case "Cleanser":
              Cleanser = Cleanser + value;
              break;
            case "Treatment":
              Treatment = Treatment + value;
              break;
            case "Moisturizer":
              Moisturizer = Moisturizer + value;
                break;
            case "Eyecare":
              Eyecare = Eyecare + value;
              break;
            case "Sunscreen":
              Sunscreen = Sunscreen + value;
              break;
            default:
              // code block
          }    

        }

  
          if(((i>0 && i<rawData.length-1) && (rawData[i].dailyLogDate !== rawData[i+1].dailyLogDate)) || ((i>0) && (i === (rawData.length-1)))){

            //Mask
            arrayDayUsage  = { dailyLogDate: rawData[i-1].dailyLogDate,
              _mask: Mask
            };
            arrayMask.push(arrayDayUsage);
            Mask=0;

            //Cleanser
            arrayDayUsage  = { dailyLogDate: rawData[i-1].dailyLogDate,
              _cleanser: Cleanser
            };
            arrayCleanser.push(arrayDayUsage);
            Cleanser=0;

             //Treatment
             arrayDayUsage  = { dailyLogDate: rawData[i-1].dailyLogDate,
              _treatment: Treatment
            };
            arrayTreatment.push(arrayDayUsage);
            Treatment=0;

             //Moisturizer
             arrayDayUsage  = { dailyLogDate: rawData[i-1].dailyLogDate,
              _moisturizer: Moisturizer
            };
            arrayMoisturizer.push(arrayDayUsage);
            Moisturizer=0;

             //Eyecare
             arrayDayUsage  = { dailyLogDate: rawData[i-1].dailyLogDate,
              _eyecare: Eyecare
            };
            arrayEyecare.push(arrayDayUsage);
            Eyecare=0;

             //Sunscreen
             arrayDayUsage  = { dailyLogDate: rawData[i-1].dailyLogDate,
              _sunscreen: Sunscreen
            };
            arraySunscreen.push(arrayDayUsage);
            Sunscreen=0;
          }   
      }
      
      arrayWeeklyUsage.push({Mask: arrayMask});
      arrayWeeklyUsage.push({Cleanser: arrayCleanser});
      arrayWeeklyUsage.push({Treatment:arrayTreatment});
      arrayWeeklyUsage.push({Moisturizer:arrayMoisturizer});
      arrayWeeklyUsage.push({Eyecare:arrayEyecare});
      arrayWeeklyUsage.push({Sunscreen:arraySunscreen});

      setProductUsageData(arrayWeeklyUsage);
      console.log(arrayWeeklyUsage);
    }

    // Historical Data Inputs
    let usageChartRaw = {
        cleanserData: [1, 1, 1, 1, 1, 0, 1],
        moisturizerData: [1, 0, 1, 0, 1, 0, 0],
        treatmentData: [1, 0, 0, 0, 0, 0, 0],
        maskData: [0, 0, 0, 0, 0, 1, 0],
        eyecareData: [0, 0, 0, 0, 0, 1, 0],
        unscreenData: [1, 0, 0, 0, 0, 0, 0],
    };

    let usageChartData = [];

    // Fit Data to UsageChart
    for (const [key, value] of Object.entries(usageChartRaw)) {
        let array = value;
        switch (props.currentDay) {
            case "Sun":
                usageChartData.push(array.slice(0, 1));
                break;
            case "Mon":
                usageChartData.push(array.slice(0, 2));
                break;
            case "Tue":
                usageChartData.push(array.slice(0, 3));
                break;
            case "Wed":
                usageChartData.push(array.slice(0, 4));
                break;
            case "Thu":
                usageChartData.push(array.slice(0, 5));
                break;
            case "Fri":
                usageChartData.push(array.slice(0, 6));
                break;
            case "Sat":
                usageChartData.push(array.slice(0, 7));
                break;
            default:
                usageChartData.push(array);
                break;
        }
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



    useEffect(() => {
        const userUsageData = getUserProductUsage();
    }, [props.currentDay]);

    return (
      <div className={styles.chartStyle}>
        <Bar
          className={styles.chart}
          data={{
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
              {
                label: "Cleanser",
                data: usageChartData[0],
                backgroundColor: "rgba(243, 186, 124, 0.7)",
                borderColor: "rgba(243, 186, 124, 0.5)",
                borderWidth: 0,
              },
              {
                label: "Moisturizer",
                data: usageChartData[1],
                backgroundColor: "rgba(209, 152, 136, 0.8)",
                borderColor: "rgba(209, 152, 136, 0.5)",
                borderWidth: 0,
              },
              {
                label: "Treatment",
                data: usageChartData[2],
                backgroundColor: "rgba(209, 152, 156, 0.7)",
                borderColor: "rgba(209, 152, 136, 1)",
                borderWidth: 0,
              },
              {
                label: "Mask",
                data: usageChartData[3],
                backgroundColor: "rgba(243, 186, 144, 0.8)",
                borderColor: "rgba(243, 186, 124, 1)",
                borderWidth: 0,
              },
              {
                label: "Eyecare",
                data: usageChartData[4],
                backgroundColor: "rgba(182, 139, 125, 0.7)",
                borderColor: "rgba(182, 139, 125, 0.7)",
                borderWidth: 0,
              },
              {
                label: "Sunscreen",
                data: usageChartData[5],
                backgroundColor: "rgba(182, 139, 155, 0.8)",
                borderColor: "rgba(182, 139, 125, 1)",
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