import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

import ReactionPlayer from "./ReactionPlayer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SC.App>
        <GlobalStyle></GlobalStyle>

        <SC.ReactionPlayer></SC.ReactionPlayer>
      </SC.App>
    </ThemeProvider>
  );
}

const SC = {
  App: styled.div`
    text-align: center;
  `,
  ReactionPlayer: styled(ReactionPlayer)`
    margin-top: 6rem;
  `
};

export default App;
