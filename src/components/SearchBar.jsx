// src/components/SearchBar.jsx//

import React from "react";
import { Search } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const {isDark} = useTheme();

  return (
  <div className="search-container"> 
   <Search className={`search-icon${isDark?"search-icon-dark" :"search-icon-light"}`}/>
    <input 
    type="text" 
    placeholder="Search for a country..." 
    value={searchTerm} 
    onChange={(e) => onSearchChange(e.target.value)} 
    className={`search-input ${isDark?'search-input-dark':'search-input-light'}`}
    />
   </div>
  );
};

export default SearchBar;