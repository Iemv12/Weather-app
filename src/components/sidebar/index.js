import React, { useState } from "react";
import moment from "moment";
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
import { ButtonRound } from "../button";
import Sidebarsearch from "../sidebarsearch";
import { useWeather } from "../../contexts/WeatherContext";
import { WEATHER_STATUS } from "../../utils/constants";
import { celciusToFahrenheit } from "../../utils/helpers";

const Sidebar = () => {
  const { country, loading, changeTemp, myLocation } = useWeather();

  const [searchToggle, setSearchToggle] = useState(false);

  const handlerToggle = () => {
    setSearchToggle((value) => !value);
  };

  return (
    <SidebarContainer>
      {Object.keys(country).length > 0 && !loading && (
        <>
          <Sidebarsearch
            className={searchToggle ? "mountedStyle" : "unMountedStyle"}
            setSearchToggle={handlerToggle}
          />
          <SidebarHeader>
            <ButtonSearch onClick={handlerToggle}>
              Seach for places
            </ButtonSearch>
            <ButtonRound colorBg="primary" colorFont onClick={myLocation}>
              <span className="material-icons">gps_fixed</span>
            </ButtonRound>
          </SidebarHeader>
          <SidebarWeatherTodayWrapper>
            <SidebarImageWeather>
              <SidebarImageTemp
                src={
                  WEATHER_STATUS[
                    country.consolidated_weather[0].weather_state_abbr
                  ]
                }
              />
            </SidebarImageWeather>
            <TemperatureWeatherTemp>
              {" "}
              {changeTemp
                ? Math.round(country.consolidated_weather[0].the_temp)
                : Math.round(
                    celciusToFahrenheit(
                      country.consolidated_weather[0].the_temp
                    )
                  )}
              {changeTemp ? <span>°C</span> : <span>°F</span>}
            </TemperatureWeatherTemp>
            <TemperatureWeatherState>
              {country.consolidated_weather[0].weather_state_name}
            </TemperatureWeatherState>
            <TemperatureWeatherDate>
              Today .{" "}
              {moment(country.consolidated_weather[0].applicable_date).format(
                "ddd, DD MMM"
              )}
              .
            </TemperatureWeatherDate>
            <TemperatureWeatherCountry>
              <span className="material-icons">location_on</span>
              {country.title}
            </TemperatureWeatherCountry>
          </SidebarWeatherTodayWrapper>
        </>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
