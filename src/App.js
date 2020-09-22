import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Cards, Chart, Form } from "./components";
import { fetchDailyData } from "./api";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    async function fetchData() {
      const fetchedData = await fetchDailyData();
      setData(fetchedData);
    }
    fetchData();
  }, [setData]);

  const onOptionClick = async (country) => {
    setData(await fetchDailyData(country));
    setCountry(country);
  };
  return (
    <div className={styles.container}>
      <h1>COVID-19 Tracker</h1>
      <Cards data={data} />
      <Form onOptionClick={onOptionClick} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
