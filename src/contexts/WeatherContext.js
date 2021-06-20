import React, { createContext, useContext, useMemo, useState } from "react";
import { getCountriesApi } from "../api/Weather";

const WeatherContext = createContext({
  country: {},
  searchCountries: () => null,
  selectCountry: () => null,
});

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [country, setCountry] = useState({});

  const searchCountries = async (value) => {
    const data = await getCountriesApi(value);
    return data;
  };

  const selectCountry = async (value) => {
    setCountry(value);
  };

  const value = useMemo(
    () => ({
      country,
      searchCountries,
      selectCountry,
    }),
    [country]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
