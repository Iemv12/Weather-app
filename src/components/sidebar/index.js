import React, { useState } from "react";
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
import Sidebarsearch from "../sidebarsearch";

const Sidebar = () => {
  const [searchToggle, setSearchToggle] = useState(false);

  const handlerToggle = () => {
    setSearchToggle((value) => !value);
  };

  return (
    <SidebarContainer>
      <Sidebarsearch
        className={searchToggle ? "mountedStyle" : "unMountedStyle"}
        setSearchToggle={handlerToggle}
      />
      <SidebarHeader>
        <ButtonSearch onClick={handlerToggle}>Seach for places</ButtonSearch>
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
