import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialised;

    background: #121214;
    color: #FFFFFF;
  }

  button {
    border: none;
    outline: none;
    color: #FFFFFF;
    cursor: pointer;
  }
`;
