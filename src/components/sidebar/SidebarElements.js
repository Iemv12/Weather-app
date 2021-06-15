import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background-color: var(--color-secondary-bg);
  position: relative;
  padding: 35px 0 20px 0;
  flex: 0.6;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    flex: 0.4;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonSearch = styled.button`
  background-color: var(--color-primary-button);
  color: var(--color-primary-font);
  border: 0;
  padding: 12px 20px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.25) 1.95px 1.95px 2.6px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const ButtonMyLocation = styled.button`
  background-color: var(--color-primary-button);
  color: var(--color-primary-font);
  border: 0;
  outline: 0;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:active {
    opacity: 0.6;
  }

  span {
    height: 24px;
    width: 24px;
  }
`;

export const SidebarImageWeather = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarImageTemp = styled.img`
  max-width: 150px;
`;

export const SidebarWeatherTodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const TemperatureWeatherTemp = styled.h1`
  color: var(--color-primary-font);
  font-size: 80px;
  font-weight: 600;
  margin: 25px 0;
  span {
    font-weight: 400;
    font-size: 35px;
    color: var(--color-primary-font-dark-one);
  }
`;

export const TemperatureWeatherState = styled.p`
  color: var(--color-primary-font-dark-one);
  font-weight: 600;
  font-size: 36px;
`;

export const TemperatureWeatherDate = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: var(--color-primary-font-dark-one);
  margin: 35px 0;
`;

export const TemperatureWeatherCountry = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  color: var(--color-primary-font-dark-one);
`;
