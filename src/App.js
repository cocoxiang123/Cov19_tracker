import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Cards, Chart, Form } from "./components";
import { fetchDailyData } from "./api";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetchDailyData();
      setData(fetchedData);
    }
    fetchData();
  }, [fetchDailyData]);
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Form />
      <Chart />
    </div>
  );
}

export default App;
