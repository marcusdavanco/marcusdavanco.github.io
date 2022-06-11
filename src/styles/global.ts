import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #404040;
    color:  #CCC;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
  }
  strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
