import React from "react";
import {
  CardClimeDay,
  CardClimeImage,
  CardClimeMinMaxTemp,
  MaxTemp,
  MinTemp,
} from "./CardClime";
import { CardContainer } from "../card";
import { WEATHER_STATUS } from "../../utils/constants";
import moment from "moment";
import { useWeather } from "../../contexts/WeatherContext";
import { celciusToFahrenheit } from "../../utils/helpers";

const CardClime = ({ item, index }) => {
  const { changeTemp } = useWeather();

  return (
    <CardContainer>
      <CardClimeDay>
        {index === 1
          ? "Tomorrow"
          : moment(item.applicable_date).format("ddd, DD MMM")}
      </CardClimeDay>
      <CardClimeImage src={WEATHER_STATUS[item.weather_state_abbr]} />
      <CardClimeMinMaxTemp>
        <MaxTemp>
          {changeTemp
            ? Math.round(item.max_temp) + "°C"
            : Math.round(celciusToFahrenheit(item.max_temp)) + "°F"}
        </MaxTemp>
        <MinTemp>
          {changeTemp
            ? Math.round(item.min_temp) + "°C"
            : Math.round(celciusToFahrenheit(item.min_temp)) + "°F"}
        </MinTemp>
      </CardClimeMinMaxTemp>
    </CardContainer>
  );
};

export default CardClime;
