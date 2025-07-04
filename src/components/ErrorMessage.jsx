// src/components/ErrorMessage.jsx//

import React from "react";
import { useTheme } from "../context/ThemeContext";


const ErrorMessage = ({ message, onRetry }) => {
  const { isDark } = useTheme();

  return (
    <div className={`error-container ${isDark ? "error-container-dark" : "error-container-light"}`}>
      <p className="error-text">{message}</p>
       {onRetry && (
         <button onClick={onRetry} className="retry-button">
          Try Again...
         </button>
       )}
    </div>
  );
};

export default ErrorMessage;