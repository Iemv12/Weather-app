import React from "react";
import {
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
import { ButtonRound } from "../button";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <ButtonSearch>Seach for places</ButtonSearch>
        <ButtonRound colorBg="primary" colorFont>
          <span className="material-icons">gps_fixed</span>
        </ButtonRound>
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

export default Sidebar;
