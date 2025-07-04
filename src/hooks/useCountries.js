// src/hooks/useCountries.jsx//
import { useState, useEffect } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState("");

  const fetchCountries = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3");
        if(!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await response.json();
        setCountries(data);
      }catch (error) {
        setError("Failed to load countries...Try again.");
  
      } finally {
        setLoading(false);
      }
    };

    const fetchCountryDetails = async (countryCode) => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        if(!response.ok) {
          throw new Error("Country not found");
        }

        const data = await response.json();
           return data[0];
      } catch (error) {
        throw new Error("Failed to load country details.");
      }
    };

    useEffect(() => {
      fetchCountries();
    },[]);

    return {
      countries,
      loading,
      error,
      fetchCountryDetails,
      refetch: fetchCountries
    };
  };
