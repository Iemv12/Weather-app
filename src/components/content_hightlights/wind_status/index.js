import React from "react";
import { CardContainer } from "../../card";
import { ContentTitle, ContentValue } from "../content_shared";
import {
  WindStatusCompass,
  WindStatusDirection,
  WindStatusDirectionWrapper,
} from "./WindStatusElements";

const WindStatus = () => {
  return (
    <CardContainer>
      <ContentTitle>Wind Status</ContentTitle>
      <ContentValue>
        7 <span>Mph</span>
      </ContentValue>
      <WindStatusDirectionWrapper>
        <WindStatusCompass>
          <span className="material-icons">navigation</span>
        </WindStatusCompass>
        <WindStatusDirection>WSW</WindStatusDirection>
      </WindStatusDirectionWrapper>
    </CardContainer>
  );
};

export default WindStatus;
