import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import { fetchCountries } from "../../api";

function Form({ onOptionClick }) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setCountries]);

  return (
    <form className={style.container}>
      <select onChange={(e) => onOptionClick(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country) => (
          <option value={country} name={country} key={country}>
            {country}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Form;
