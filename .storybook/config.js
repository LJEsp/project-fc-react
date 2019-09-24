import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/styles/GlobalStyle";
import theme from "../src/styles/theme";

// Automatically import all files ending in *.stories.js
configure(require.context("../src/components", true, /\.stories\.js$/), module);

// Include theme and global styling
const withStyled = cb => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        padding: theme.size.m,
        backgroundColor: theme.color.neutral.dark1
      }}
    >
      <GlobalStyle />
      {cb()}
    </div>
  </ThemeProvider>
);

addDecorator(withStyled);
