import React from "react";
import { CardContainer } from "../../card";
import { ContentTitle, ContentValue } from "../content_shared";

const AirPresure = () => {
  return (
    <CardContainer>
      <ContentTitle>Air Presure</ContentTitle>
      <ContentValue>
        998 <span>mb</span>
      </ContentValue>
    </CardContainer>
  );
};

export default AirPresure;
