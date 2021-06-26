import React from "react";
import { CardContainer } from "../../card";
import { ContentTitle, ContentValue } from "../content_shared";

const Visibility = ({ visibilityValue }) => {
  return (
    <CardContainer>
      <ContentTitle>Visibility</ContentTitle>
      <ContentValue>
        {visibilityValue.toFixed(1)} <span>miles</span>
      </ContentValue>
    </CardContainer>
  );
};

export default Visibility;
