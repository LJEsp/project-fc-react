import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import GlobalStyle from "styles/globalStyle";
import theme from "styles/theme";

import Button from "components/Button";

const SC = {
  App: styled.div`
    .headline-1 {
      ${p => p.theme.typeMixin.headline1}
    }
  `
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SC.App>
        <GlobalStyle></GlobalStyle>

        <Button>Click me</Button>

        <p className="headline-1">Headline 1</p>
      </SC.App>
    </ThemeProvider>
  );
}

export default App;
