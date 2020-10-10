import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
function Chart({ country, data: { confirmed, recovered, deaths } }) {
  // const [dailyData, setDailyData] = useState([]);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setDailyData(await fetchEveryDayData());
  //   };
  //   fetchAPI();
  // }, []);

  /* const lineChart = !dailyData ? <h1>Data not Found!</h1> : (
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
 */
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["red", "green", "blue"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true, text: "Current state in" + country ? country : 'Global'
        }
      }
      }
    />
  ) : null;
  return (
    <div className={styles.container}>{barChart}</div>
  );
}

export default Chart;
