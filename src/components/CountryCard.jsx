// arc/components/CountryCard.jsx//
import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./CountryCard.css";

const CountryCard = ({country, onClick}) => {
  const { isDark } = useTheme();

 const formatPopulation = (population) => {
  return population.toLocaleString();
 };

 return (
  <div className={`country-card${isDark ? "country-card-dark" : "country-card-light"}`}
   onClick={() => onClick(country.cca3)}
   >
    <div className="country-flag-container">
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`}
       className="country-flag"
       />
  </div>

  <div className="card-content">
  <h3 className="country-name">{country.name.common}</h3>
  <div className="country-info">
   <p><span className="info-label">Population:</span>{formatPopulation(country.population)}</p>
   <p><span className="info-label">Capital:</span>{country.capital?.[0] || "N/A"}</p>
   </div>
  </div>
 </div>
);
};

export default CountryCard;
