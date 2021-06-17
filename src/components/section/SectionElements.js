import styled from "styled-components";

export const SectionContainer = styled.div`
  background: var(--color-primary-bg);
  color: var(--color-primary-font);
  padding: 20px;

  @media (min-width: 640px) {
    padding: 20px 50px;
  }

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

export const SectionChangeTemperature = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: flex-end;

    button {
      margin-right: 15px;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const SectionTemperatureNextDays = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 40px;
  @media screen and (min-width: 1024px) {
    margin: 40px 0;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }
`;

export const SectionTodaysHighlights = styled.div``;

export const SectionTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 2rem;
`;

export const SectionInformationWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 15px;
  grid-template-columns: 1fr;
  @media screen and (min-width: 1024px) {
    margin: 40px 0;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
  margin-bottom: 20px;
`;

export const SectionFooter = styled.footer`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10px;

  a {
    text-decoration: none;
    color: var(--color-primary-font);
    font-weight: 600;
    margin: 0 5px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }

  @media screen and (min-width: 640px) {
    a {
      font-size: 15px;
    }
  }
  @media screen and (min-width: 768px) {
    a {
      font-size: 20px;
    }
  }
`;
