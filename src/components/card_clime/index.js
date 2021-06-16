import React from "react";
import {
  CardClimeDay,
  CardClimeImage,
  CardClimeMinMaxTemp,
  MaxTemp,
  MinTemp,
} from "./CardClime";
import Image from "../../images/Shower.png";
import { CardContainer } from "../card";

const CardClime = () => {
  return (
    <CardContainer>
      <CardClimeDay>Tomorrow</CardClimeDay>
      <CardClimeImage src={Image} />
      <CardClimeMinMaxTemp>
        <MaxTemp>16°C</MaxTemp>
        <MinTemp>11°C</MinTemp>
      </CardClimeMinMaxTemp>
    </CardContainer>
  );
};

export default CardClime;
