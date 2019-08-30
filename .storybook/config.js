import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/styles/GlobalStyle";
import theme from "../src/styles/theme";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Include theme and global styling
const withStyled = cb => (
  <ThemeProvider theme={theme}>
    <div style={{ padding: "16px", backgroundColor: "#121212" }}>
      <GlobalStyle />
      {cb()}
    </div>
  </ThemeProvider>
);

addDecorator(withStyled);

configure(loadStories, module);
