import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Raleway', sans-serif;
    }
    :root {
      --color-primary-bg: #100E1D;
      --color-secondary-bg: #1E213A;

      --color-primary-button: #6E707A;
      --color-secondary-button: #E7E7EB;
      --color-third-button: #585676;

      --color-primary-font: #E7E7EB;
      --color-primary-font-dark-one: #A09FB1;
      --color-primary-font-dark-two: #88869D;
      --color-secondary: #110E3C;
    }
`;
