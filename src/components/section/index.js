import React from "react";
import { useWeather } from "../../contexts/WeatherContext";
import { ButtonRound } from "../button";
import CardClime from "../card_clime";
import {
  Humidity,
  Visibility,
  WindStatus,
  AirPresure,
} from "../content_hightlights";
import Spinner from "../spinner";
import {
  SectionChangeTemperature,
  SectionContainer,
  SectionInformationWrapper,
  SectionTemperatureNextDays,
  SectionTitle,
  SectionTodaysHighlights,
  SectionFooter,
} from "./SectionElements";

const Section = () => {
  const { country, loading, setChangeTemp } = useWeather();

  return (
    <SectionContainer>
      {Object.keys(country).length > 0 && !loading && (
        <>
          <SectionChangeTemperature>
            <ButtonRound
              colorBg="secondary"
              onClick={() => setChangeTemp(true)}
            >
              <p>℃</p>
            </ButtonRound>
            <ButtonRound
              colorBg="third"
              colorFont
              onClick={() => setChangeTemp(false)}
            >
              <p>℉</p>
            </ButtonRound>
          </SectionChangeTemperature>
          <SectionTemperatureNextDays>
            {country.consolidated_weather
              .filter(
                (value) => value.id !== country.consolidated_weather[0].id
              )
              .map((item, index) => (
                <CardClime key={index} index={index + 1} item={item} />
              ))}
          </SectionTemperatureNextDays>
          <SectionTodaysHighlights>
            <SectionTitle>Today's Highlights</SectionTitle>
            <SectionInformationWrapper>
              <WindStatus
                windSpeed={country.consolidated_weather[0].wind_speed}
                windDirectionCompass={
                  country.consolidated_weather[0].wind_direction_compass
                }
                windDirection={country.consolidated_weather[0].wind_direction}
              />
              <Humidity
                humidityValue={country.consolidated_weather[0].humidity}
              />
              <Visibility
                visibilityValue={country.consolidated_weather[0].visibility}
              />
              <AirPresure
                airPresureValue={country.consolidated_weather[0].air_pressure}
              />
            </SectionInformationWrapper>
          </SectionTodaysHighlights>
          <SectionFooter>
            created by{" "}
            <a
              href="https://github.com/iemv12"
              target="_blank"
              rel="noopener noreferrer"
            >
              iemv12
            </a>{" "}
            - devChallenges.io
          </SectionFooter>
        </>
      )}
      {loading && <Spinner />}
    </SectionContainer>
  );
};

export default Section;
