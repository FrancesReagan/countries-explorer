// src/components/SearchBar.jsx//

import React from "react";
import { Search } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "./SearchBar.css";

const SearchBar = ({searchTerm,onSearchChange}) => {
  const {isDark} = useTheme();

  return (
   <div className={`search-container${isDark?'search-container-dark':'search-container-light'}`}>
    <div className="search-icon">
      <Search size={18}/>
    </div>

    <input type="text" placeholder="Search for a country..." 
    value={searchTerm} 
    onChange={(e) => onSearchChange(e.target.value)} 
    className={`search-input ${isDark?'search-input-dark':'search-input-light'}`}
    />
   </div>
  );
};

export default SearchBar;