import styled from "styled-components";

export const ButtonRound = styled.button`
  background-color: var(
    ${({ colorBg }) =>
      colorBg === "primary"
        ? "--color-primary-button"
        : colorBg === "secondary"
        ? "--color-secondary-button"
        : colorBg === "third"
        ? "--color-third-button"
        : ""}
  );
  color: var(
    ${({ colorFont }) =>
      colorFont ? "--color-primary-font" : "--color-secondary"}
  );
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

  p {
    font-size: 18px;
    font-weight: bold;
  }
`;
