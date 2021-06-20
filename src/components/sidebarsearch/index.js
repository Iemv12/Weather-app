import React, { useState } from "react";
import { useWeather } from "../../contexts/WeatherContext";
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
  const { searchCountries } = useWeather();

  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

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
    setCountries(data);
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
        {countries ? (
          countries.map((country, index) => (
            <Country key={index}>
              <CountryName>{country.title}</CountryName>
              <span className="material-icons">chevron_right</span>
            </Country>
          ))
        ) : (
          <p>No countries</p>
        )}
      </SidebarsearchCountriesWrapper>
    </SidebarsearchContainer>
  );
};

export default Sidebarsearch;
