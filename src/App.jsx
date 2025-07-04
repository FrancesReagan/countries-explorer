// src/App.jsx//

import { useState, useMemo } from "react"
import { ThemeProvider } from "./context/ThemeContext";
import { useCountries } from "./hooks/useCountries";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryGrid from "./components/CountryGrid";
import CountryDetail from "./components/CountryDetail";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";

const AppContent=() => {
  const { countries, loading, error, fetchCountryDetails, refetch } = useCountries();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);

  // filter countries based on search and region//
  const filteredCountries = useMemo(() => 
    let filtered = countries;
    if (searchTerm) {
      filtered = filtered.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
 

  return (
    <>
      <div>
        
      </div>
      
    </>
  )
}

export default App
