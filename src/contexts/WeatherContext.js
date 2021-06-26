import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getCountriesApi,
  getCountryApi,
  getCountryLocationApi,
} from "../api/Weather";

const WeatherContext = createContext({
  country: null,
  woeid: null,
  loading: null,
  changeTemp: null,
  searchCountries: () => null,
  myLocation: () => null,
  selectCountry: () => null,
  setWoeid: () => null,
  setChangeTemp: () => null,
});

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [country, setCountry] = useState({});
  const [woeid, setWoeid] = useState(116545);
  const [loading, setLoading] = useState(false);
  const [changeTemp, setChangeTemp] = useState(false);

  useEffect(() => {
    selectCountry(woeid);
  }, [woeid]);

  const searchCountries = async (value) => {
    const data = await getCountriesApi(value);
    return data;
  };

  const myLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const data = await getCountryLocationApi(position);
        setWoeid(data.woeid);
      });
    } else {
      alert("Geolocation is not supported");
    }
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
      changeTemp,
      searchCountries,
      myLocation,
      setWoeid,
      setChangeTemp,
    }),
    [country, woeid, loading, changeTemp]
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
