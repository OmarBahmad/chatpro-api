import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }

  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body,
    input,
    button,
    textarea,
    select {
      font-family: ${theme.font.family};
    }

    body {
      color: ${theme.colors.black};
      background: ${theme.colors.background};
    }

    a {
      color: ${theme.colors.main};
      text-decoration: underline;
    }

    tspan,
    .apexcharts-legend-text {
      font-family: ${theme.font.family} !important;
      font-weight: ${theme.font.medium} !important;
    }

    .main_app {
      display: flex;
      width: 100%;
      align-items: center;
    }
  `}
`;
