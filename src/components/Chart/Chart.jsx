import React, { useState, useEffect } from "react";
import { fetchEveryDayData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchEveryDayData());
    };
    fetchAPI();
  });
  console.log(dailyData);
  const lineChart = !dailyData.length ? null : (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "red",
            fill: "true",
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "#3333ff",
            fill: "true",
          },
        ],
      }}
    />
  );
  return <div className={styles.container}>{lineChart}</div>;
}

export default Chart;
