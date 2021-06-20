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

    html {
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
      }
      &::-webkit-scrollbar {
        width: 10px;
        background-color: #f5f5f5;
      }
      &::-webkit-scrollbar-thumb {
        background-image: -webkit-gradient(
          linear,
          left bottom,
          left top,
          color-stop(0.44, rgb(122, 153, 217)),
          color-stop(0.72, rgb(73, 125, 189)),
          color-stop(0.86, rgb(28, 58, 148))
        );
      }
    }

    .container {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        flex-direction: row;
      }
    }

    .mountedStyle{
      animation: inAnimation 250ms ease-in;
    }

    .unMountedStyle {
      animation: outAnimation 270ms ease-out;
      animation-fill-mode: forwards
    }

    @keyframes inAnimation {
      0% {
        opacity: 0;
        visibility: hidden;
      }
      100% {
        opacity: 1;
        visibility: visible;
      }
    }
    @keyframes outAnimation {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        visibility: hidden;
      }
    }

`;
