import React from "react";
import { CardContainer } from "../../card";
import { ContentTitle, ContentValue } from "../content_shared";
import {
  WindStatusCompass,
  WindStatusDirection,
  WindStatusDirectionWrapper,
} from "./WindStatusElements";

const WindStatus = ({ windSpeed, windDirectionCompass, windDirection }) => {
  return (
    <CardContainer>
      <ContentTitle>Wind Status</ContentTitle>
      <ContentValue>
        {Math.round(windSpeed)} <span>Mph</span>
      </ContentValue>
      <WindStatusDirectionWrapper>
        <WindStatusCompass>
          <span
            className="material-icons"
            style={{ transform: `rotate(${windDirection}deg)` }}
          >
            navigation
          </span>
        </WindStatusCompass>
        <WindStatusDirection>{windDirectionCompass}</WindStatusDirection>
      </WindStatusDirectionWrapper>
    </CardContainer>
  );
};

export default WindStatus;
