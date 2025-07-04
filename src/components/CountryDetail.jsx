// arc/components/CountryDetail.jsx//
import React, { use } from "react";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "./CountryDetail.css";

const CountryDetail = ({ countryCode, onBack, fetchCountryDetails }) => {
  const { isDark } = useTheme();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
  const loadCountryDetails = async () => {
    setLoading(true);
    setError("");

    try {
      const countryData = await fetchCountryDetails(countryCode);
      setCountry(countryData);
    } catch (error) {
      setError("Failed to load Country details");
    } finally {
      setLoading(false);
    }
  };

  if (countryCode) {
    loadCountryDetails();
  }
},[countryCode, fetchCountryDetails]};

if (loading) {
  return (
    <div className={`detail-loading ${ isDark ? "detail-loading-dark" : "detail-loading-light"}`}>
     <div className="loading-spinner"></div>
     <p>Loading Country details...</p>
    </div>
  );
}

if (error || !country) {
  return (
    <div className={`detail-error ${isDark ? "detail-error-dark" : "detail-error-light"}`}>
     <p>{error || "Country not found"}</p>
     <button onClick={onBack} className={`back-button ${isDark ? "back-button-dark" : "back-button-light"}`}>
       <ArrowLeft size={16}/>
        Back
     </button>
    </div>
  );
}

const formatPopulation = (population) => population.toLocaleString();

const getNativeName=() => {
  if(!country.name.nativeName) return "N/A";
  const nativeNames = Object.values(country.name.nativeName);
  return nativeNames[0]?.common || "N/A";
};

const getCurrencies = () => {
  if(!country.currencies) return "N/A";
  return Object.values(country.currencies).map(currency => currency.name).join(", ");
};

const getLanguages = () => {
  if(!country.languages) return "N/A";
  return Object.values(country.languages).join(",");
};

return (
  <div className={` country-detail ${ isDark ? "country-detail-dark" : "country-detail-light"}`}>
    <div className="detail-container">
      <button
        onClick={onBack} className={`back-button ${isDark ? "back-button-dark" : "back-button-light"}`}>
        <ArrowLeft size={16} />
          Back
        </button>
    <div className="detail-content">
    <div className="flag-section">
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`}
           className="detail-flag"
      />
    </div>

    <div className="info-section">
      <h1 className="country-title">{country.name.common}</h1>
        <div className="info-grid">
          <div className="info-column">
            <p><span className="info-label">Native Name:</span>{getNativeName()}</p>
            <p><span className="info-label">Population:</span>{formatPopulation(country.population)}</p>
            <p><span className="info-label">Sub Region:</span>{country.subregion || "N/A"}</p>
            <p><span className="info-label">Captial:</span>{country.capital?.[0] || "N/A"}</p>
          </div>

        <div className="info-column">
          <p><span className="info-label">Top Level Domain:</span>{country.tld?.[0] || "N/A"}</p>
          <p><span className="info-label">Currencies:</span>{getCurrencies()}</p>
          <p><span className="info-label">Languages:</span>{getLanguages()}</p>
        </div>
      </div>


    {country.borders && country.borders.length > 0 && (
      <div className="borders-section">
        <h3>Border Countries:</h3>
         <div className="border-countries">
          {country.borders.slice(0,8)}.map(border => (
            <span key={border} className={`border-tag ${isDark ? "border-tag-dark" : "border-tag-light"}`}>
              {border}
            </span>
            ))}
        </div>
       </div>
      )}
    </div>  
   </div>
  </div>
  </div>
  );
};

export default CountryDetail;

    


  




