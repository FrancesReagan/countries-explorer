// src/components/Header.jsx//
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import "./Header.css";

const Header = () => {
  const {isDark,toggleTheme} = useTheme();

  return (
    <header className={`header ${isDark?'header-dark':'header-light'}`}>
      <h1 className="header-title">Where in the world?!</h1>
      <button onClick={toggleTheme} className={`theme-toggle ${isDark?'theme-toggle-dark':'theme-toggle-light'}`}>
      {isDark ? <Sun size={16}/> : <Moon size={16}/>}
      {isDark?'Light Mode':'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
