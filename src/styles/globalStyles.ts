import { createGlobalStyle } from "styled-components";
import { theme } from "./variables";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: sans-serif;
  }

  .container {
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
  }

  a {
    color: ${theme.colors.black};
  }
`;
