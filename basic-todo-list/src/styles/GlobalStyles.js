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

  #root {
    max-width: 600px;
    margin: 40px auto;
    padding: 24px;
  }

  @media (max-width: 640px) {
    #root {
      margin: 0;
      padding: 16px;
    }
  }
`;

export default GlobalStyles;
