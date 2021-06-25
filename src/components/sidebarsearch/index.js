import React, { useState } from "react";
import { useWeather } from "../../contexts/WeatherContext";
// import Spinner from "../spinner";
import {
  Country,
  CountryName,
  SearchButton,
  SearchInput,
  SidebarsearchClose,
  SidebarsearchContainer,
  SidebarsearchCountriesWrapper,
  SidebarsearchInput,
} from "./SidebarsearchElements";

const Sidebarsearch = ({ setSearchToggle, className }) => {
  const { searchCountries, setWoeid } = useWeather();

  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      alert("Field search is required");
      return;
    }

    const data = await searchCountries(searchValue);
    setCountries(data || []);
  };

  const seachCountry = (woeid) => {
    setWoeid(woeid);
    setSearchToggle();
  };

  return (
    <SidebarsearchContainer className={className}>
      <SidebarsearchClose>
        <span className="material-icons" onClick={setSearchToggle}>
          close
        </span>
      </SidebarsearchClose>
      <SidebarsearchInput>
        <SearchInput>
          <span className="material-icons">search</span>
          <input placeholder="Search countries" onChange={handleChange} />
        </SearchInput>
        <SearchButton onClick={handleClick}> Search </SearchButton>
      </SidebarsearchInput>
      <SidebarsearchCountriesWrapper>
        {/* {loading && !countries && <Spinner />} */}
        {countries && countries.length === 0 && (
          <p style={{ textAlign: "center" }}>Countries not found</p>
        )}
        {countries &&
          countries.length > 0 &&
          countries.map((country, index) => (
            <Country key={index} onClick={() => seachCountry(country.woeid)}>
              <CountryName>{country.title}</CountryName>
              <span className="material-icons">chevron_right</span>
            </Country>
          ))}
      </SidebarsearchCountriesWrapper>
    </SidebarsearchContainer>
  );
};

export default Sidebarsearch;
