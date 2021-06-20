import React from "react";
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
  return (
    <SidebarsearchContainer className={className}>
      <SidebarsearchClose>
        <span className="material-icons" onClick={setSearchToggle}>
          close
        </span>
      </SidebarsearchClose>
      <SidebarsearchInput>
        <SearchInput placeholder="Search Country" />
        <SearchButton> Search </SearchButton>
      </SidebarsearchInput>
      <SidebarsearchCountriesWrapper>
        <Country>
          <CountryName>London</CountryName>
          <span className="material-icons">chevron_right</span>
        </Country>
        <Country>
          <CountryName>New York</CountryName>
          <span className="material-icons">chevron_right</span>
        </Country>
        <Country>
          <CountryName>Santo Domingo</CountryName>
          <span className="material-icons">chevron_right</span>
        </Country>
      </SidebarsearchCountriesWrapper>
    </SidebarsearchContainer>
  );
};

export default Sidebarsearch;
