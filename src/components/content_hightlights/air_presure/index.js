import React from "react";
import { CardContainer } from "../../card";
import { ContentTitle, ContentValue } from "../content_shared";

const AirPresure = ({ airPresureValue }) => {
  return (
    <CardContainer>
      <ContentTitle>Air Presure</ContentTitle>
      <ContentValue>
        {Math.round(airPresureValue)}
        <span>mb</span>
      </ContentValue>
    </CardContainer>
  );
};

export default AirPresure;
