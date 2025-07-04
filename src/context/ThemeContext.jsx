
// src/context/ThemeContext.jsx//
import React from "react";
import { createContext, useContext,useState} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
;}


