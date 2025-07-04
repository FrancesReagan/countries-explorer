// arc/components/CountryCard.jsx//
import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./CountryCard.css";

const CountryCard = ({country, onClick}) => {
  const { isDark } = useTheme();

 const formatPopulation = (population) => {
  return population.toLocaleString();
 };

 return (
  <div className=
 )

}
