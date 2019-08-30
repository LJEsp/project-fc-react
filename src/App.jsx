import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

import BaseButton from "components/Button/BaseButton";

const SC = {
  App: styled.div`
    padding: ${p => p.theme.size.l};
  `
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SC.App>
        <GlobalStyle></GlobalStyle>

        <BaseButton>Click me</BaseButton>
      </SC.App>
    </ThemeProvider>
  );
}

export default App;
