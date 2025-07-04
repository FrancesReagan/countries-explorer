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


    
  }


}