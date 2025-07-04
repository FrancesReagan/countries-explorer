// src/components/RegionFilter.jsx//
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import './RegionFilter.css';

const RegionFilter = ({ selectedRegion, onRegionChange }) => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const regions = ["Africa", "Americas", "Asia","Europe", "Oceania"];

  return (
   <div className="region-filter-container">
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className={`region-select ${isOpen ? "open": ""} ${isDark ? "region-select-dark" : "region-select-light"}`}
      > 
      {selectedRegion || "Filter by Region"}
      <ChevronDown size={20}/>
      </button>

   {isOpen && (
    <div className={`region-dropdown ${isDark ? "region-dropdown-dark" : "region-dropdown-light"}`}>
        <button
         className="region-option"
         onClick={() => {
          onRegionChange("");
          setIsOpen(false);
         }}
         >
        All Regions
        </button> 
    
        {regions.map((region) => (
            <button key={region}
             className="region-option"
             onClick={()=> {
               onRegionChange(region);
              setIsOpen(false);
            }}>
            {region}
           </button>
          ))}
   </div>
  )}
 </div>
  );
};


    export default RegionFilter;
