import styled from "styled-components";

export const SectionContainer = styled.div`
  background: var(--color-primary-bg);
  height: 100vh;
  color: var(--color-primary-font);
  padding: 20px 50px;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.44, rgb(122, 153, 217)),
      color-stop(0.72, rgb(73, 125, 189)),
      color-stop(0.86, rgb(28, 58, 148))
    );
  }

  @media screen and (min-width: 768px) {
    flex: 1;
    padding: 20px 80px;
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
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SectionFooter = styled.footer`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--color-primary-font);
    font-weight: 600;
    margin: 0 5px;
    font-size: 14px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }
`;
