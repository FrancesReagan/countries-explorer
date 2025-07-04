// src/components/LoadingSpinner.jsx//

import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  const { isDark } = useTheme();

  return (
    <div className={`loading-container ${isDark ? "loading-container-dark" : "loading-container-light"}`}>
      <div className="spinner"></div>
    ; <p>Loading Countries...</p>
    </div>
  );
};

export default LoadingSpinner;