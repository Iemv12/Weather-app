import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getCountriesApi, getCountryApi } from "../api/Weather";

const WeatherContext = createContext({
  country: {},
  woeid: null,
  loading: null,
  searchCountries: () => null,
  selectCountry: () => null,
  setWoeid: () => null,
});

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [country, setCountry] = useState(null);
  const [woeid, setWoeid] = useState(116545);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    selectCountry(woeid);
  }, [woeid]);

  const searchCountries = async (value) => {
    setLoading(true);
    const data = await getCountriesApi(value);
    setLoading(false);
    return data;
  };

  const selectCountry = async (value) => {
    setLoading(true);
    const data = await getCountryApi(value);
    setLoading(false);
    setCountry(data || {});
  };

  const value = useMemo(
    () => ({
      country,
      woeid,
      loading,
      searchCountries,
      setWoeid,
    }),
    [country, woeid]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
