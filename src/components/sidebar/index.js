import React from "react";
import {
  ButtonMyLocation,
  ButtonSearch,
  SidebarContainer,
  TemperatureWeatherCountry,
  SidebarHeader,
  SidebarImageWeather,
  SidebarWeatherTodayWrapper,
  TemperatureWeatherDate,
  TemperatureWeatherState,
  TemperatureWeatherTemp,
  SidebarImageTemp,
} from "./SidebarElements";

import image from "../../images/Shower.png";

const index = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <ButtonSearch>Seach for places</ButtonSearch>
        <ButtonMyLocation>
          <span className="material-icons">gps_fixed</span>
        </ButtonMyLocation>
      </SidebarHeader>
      <SidebarWeatherTodayWrapper>
        <SidebarImageWeather>
          <SidebarImageTemp src={image} />
        </SidebarImageWeather>
        <TemperatureWeatherTemp>
          {" "}
          15<span>℃</span>
        </TemperatureWeatherTemp>
        <TemperatureWeatherState>Shower</TemperatureWeatherState>
        <TemperatureWeatherDate>Today . Fri, 5 Jun.</TemperatureWeatherDate>
        <TemperatureWeatherCountry>
          <span className="material-icons">location_on</span>
          Helsinki
        </TemperatureWeatherCountry>
      </SidebarWeatherTodayWrapper>
    </SidebarContainer>
  );
};

export default index;
