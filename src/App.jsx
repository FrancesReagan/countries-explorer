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
import { Search } from "lucide-react";

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

    if (selectedRegion) {
      filtered = filtered.filter(country => country.region === selectedRegion);

    }
 
    return filtered;
    },[countries,searchTerm,selectedRegion]);

  const handleCountryClick = (countryCode) => {
    setSelectedCountryCode(countryCode);
    };

  const handleBackClick = () => {
    setSelectedCountryCode(null);
   };

   if(selectedCountryCode){
    return (
      <div className="app">

      <Header/>
      <CountryDetail
        countryCode={selectedCountryCode}
        onBack={handleBackClick}
        fetchCountryDetails={fetchCountryDetails}
        />
    </div>
    );
  }

  return (
    <div className="app">
      <Header/>

        <main className="main">
          <div className="container">
           <div className="controls">
              <SearchBar 
                 searchTerm={searchTerm}
                 onSearchChange={setSearchTerm}
                 />

              <RegionFilter
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
                />
           </div>
          {loading ? (
            <LoadingSpinner/>
          ) : error ? (
            <ErrorMessage message={error} onRetry={refetch} />
          ) : (
            <CountryGrid
               countries={filteredCountries}
               onCountryClick={handleCountryClick}
             />
          )}
          </div>
        </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  );
};
    
 

export default App;
