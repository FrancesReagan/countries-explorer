// src/components/RegionFilter.jsx//
import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import './RegionFilter.css';

const RegionFilter = ({selectedRegion, onRegionChange}) => {
  const {isDark} = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const regions = ["Africa", "Americas", "Europe", "Oceania"];

  return (
   <div className="region-filter-container">
    <button onClick={() => setIsOpen(!isOpen)}
      className={`region-select ${isDark?'region-select-dark':'region-select-light'}`}
      > 
      {selectedRegion || "filter by region"}
      <ChevronDown size={16}/>
      </button>

  {isOpen && (
    <div className={`region-dropdown ${isDark?'region-dropdown-dark': 'region-dropdown-light'}`}>
    <div className={`region-dropdown${isDark?"region-dropdown-dark" : "region-dropdown-light"}`}
      <button 
      className="region-option"
      onClick={()=> {
        onRegionChange("");
    u    seIsOpen(false);
      )}
      >
        All <Regions>
    </div>
          {regions.map(region => (
            <div 
            key={region}
             onClick={()=> {
              onRegionChange(region);
              setIsOpen(false);
            }}
            >
            {region}
          </div>
          ))}
        </div>
        )}
      </div>
      );
    };

    export default RegionFilter;
