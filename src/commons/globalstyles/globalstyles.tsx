import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background: #E5E5E5;
};
  body, * {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif, Helvetica, Sans-Serif;
    font-display: swap;
  }
`;

export default GlobalStyle;
