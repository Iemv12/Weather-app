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

const CardClime = ({ item, index }) => {
  return (
    <CardContainer>
      <CardClimeDay>
        {index === 1
          ? "Tommorow"
          : moment(item.applicable_date).format("ddd, DD MMM")}
      </CardClimeDay>
      <CardClimeImage src={WEATHER_STATUS[item.weather_state_abbr]} />
      <CardClimeMinMaxTemp>
        <MaxTemp>{Math.round(item.max_temp)}°C</MaxTemp>
        <MinTemp>{Math.round(item.min_temp)}°C</MinTemp>
      </CardClimeMinMaxTemp>
    </CardContainer>
  );
};

export default CardClime;
