import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: Poppins, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #fff;
      background-color: #333841;
  }

  #root {
      height: 100%;
      width: 100%;
  }
`;

export default GlobalStyle;
