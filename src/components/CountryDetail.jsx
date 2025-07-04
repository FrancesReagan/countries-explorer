// arc/components/CountryDetail.jsx//
import React, { use } from "react";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "./CountryDetail.css";

const CountryDetail = ({ countryCode, onBack, fetchCountryDetails }) => {
  const { isDark } = useTheme();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
  const loadCountryDetails = async () => {
    setLoading(true);
    setError("");

    try {
      const countryData = await fetchCountryDetails(countryCode);
      setCountry(countryData);
    } catch (error) {
      setError("Failed to load Country details");
    } finally {
      setLoading(false);
    }
  };

  



 })



}
