import React from "react";
import { CardContainer } from "../../card";
import { ContentTitle, ContentValue } from "../content_shared";
import {
  HumidityPercentage,
  Percentage,
  PercentageBar,
  PercentageValue,
} from "./HumidityElements";

const Humidity = () => {
  const value = 40;

  return (
    <CardContainer>
      <ContentTitle>Humidity</ContentTitle>
      <ContentValue>
        84 <span>%</span>
      </ContentValue>
      <HumidityPercentage>
        <PercentageValue>
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </PercentageValue>
        <PercentageBar>
          <div className="value" style={{ width: `${value}%` }}></div>
        </PercentageBar>
        <Percentage>%</Percentage>
      </HumidityPercentage>
    </CardContainer>
  );
};

export default Humidity;
