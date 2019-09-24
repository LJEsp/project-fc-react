import { createGlobalStyle, css } from "styled-components/macro";

const resetCSS = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const GlobalStyle = createGlobalStyle`
${resetCSS}

  ${p => p.theme.settings.fontImports};

  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

  body {
    font-size: ${p => p.theme.settings.fontSize};
    font-family: ${p => p.theme.settings.fontFamily}
  }
`;

export default GlobalStyle;
