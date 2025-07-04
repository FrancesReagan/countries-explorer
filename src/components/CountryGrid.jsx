// src/components/CountryGrid.jsx//

import React from "react";
import CountryCard from "./CountryCard";
import { useTheme } from "../context/ThemeContext";
import "./CountryGrid.css";

const CountryGrid = ({ countries, onCountryClick }) => {
  const { isDark } = useTheme();

  if (countries.length === 0) {
    return (
      <div className={`no-results ${isDark ? "no-results-dark" : "no-results-light"}`}>
        <p>No Countries found. Try to adjust your filter or search.</p>
      </div>
    );
  }

 return (
  <div className="countries-grid">
    {countries.map((country) => (
      <CountryCard key={country.cca3} 
                   country={country}
                   onClick={onCountryClick}
      />

    ))}
  </div>
 );
};

export default CountryGrid;