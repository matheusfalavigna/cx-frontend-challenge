import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #FFF159;
    --gray: #D3D3D3;

    --text: #333333;
    --text-adress: #999999;
    --text-installments: #418120;

    --background: #EEEEEE;
    --background-card: #FFFFFF;

    --font-size: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  body {
    background: var(--background);
  }
`;
