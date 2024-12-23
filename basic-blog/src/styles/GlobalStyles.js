import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: hsl(0 0% 98%);
    color: hsl(240 10% 3.9%);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  ::placeholder {
    color: hsl(240 3.8% 46.1%);
  }

  :focus {
    outline: none;
  }
`;

export default GlobalStyles;
