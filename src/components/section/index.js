import React from "react";
import { ButtonRound } from "../button";
import CardClime from "../card_clime";
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
  return (
    <SectionContainer>
      <SectionChangeTemperature>
        <ButtonRound colorBg="secondary">
          <p>℃</p>
        </ButtonRound>
        <ButtonRound colorBg="third" colorFont>
          <p>℉</p>
        </ButtonRound>
      </SectionChangeTemperature>
      <SectionTemperatureNextDays>
        <CardClime />
        <CardClime />
        <CardClime />
        <CardClime />
        <CardClime />
      </SectionTemperatureNextDays>
      <SectionTodaysHighlights>
        <SectionTitle>Today's Highlights</SectionTitle>
        <SectionInformationWrapper></SectionInformationWrapper>
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
    </SectionContainer>
  );
};

export default Section;
