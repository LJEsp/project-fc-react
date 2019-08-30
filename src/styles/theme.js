import { css } from "styled-components";

const color = {
  primary: {
    main: "#F16518",
    light: "#FF964A",
    dark: "#B73400"
  },
  neutral: {
    dark1: "#121212",
    dark2: "#171717",
    dark3: "#222222",
    dark4: "#3B3A39",
    medium: "#9B9B9B",
    light: "#F0F1F2"
  },
  ui: {
    success: "#63AA12",
    danger: "#63AA12"
  },
  basic: {
    light: "#FFFFFF",
    dark: "#000000"
  }
};

const typography = {
  sansSerif: "Poppins, sans-serif",
  scale: {
    tiny: "0.6875", // 11px
    small: "0.875em", // 14px
    regular: "1em", // 16px
    large: "1.125em", // 18px
    headline3: "1.5em", // 20px
    headline2: "2em", // 28px
    headline1: "3.875em" // 40px
  },
  mixin: {
    get tiny() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.tiny};
        font-weight: 600;
      `;
    },
    get small() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.small};
        font-weight: 400;
      `;
    },
    get caption() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.small};
        font-weight: 600;
      `;
    },
    get regular() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.regular};
        font-weight: 400;
      `;
    },
    get button() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.large};
        font-weight: 600;
        text-transform: uppercase;
      `;
    },
    get headline4() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.large};
        font-weight: 400;
      `;
    },
    get headline3() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.headline3};
        font-weight: 600;
      `;
    },
    get headline2() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.headline2};
        font-weight: 600;
      `;
    },
    get headline1() {
      return css`
        font-family: ${typography.sansSerif};
        font-size: ${typography.scale.headline1};
        font-weight: 400;
        text-transform: uppercase;
      `;
    }
  }
};

const size = {
  xxs: "0.125rem", // 2px
  xs: "0.25rem", // 4px
  s: "0.5rem", // 8px
  m: "1rem", // 16px
  l: "2rem", // 32px
  xl: "4rem", // 64px
  xxl: "6rem", // 96px
  button: "3rem", // 48px
  increment: increment => `${increment}rem`
};

const border = {
  radius: "4px"
};

const settings = {
  fontSize: "16px",
  fontImports: css`
    @import url("https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap");
  `,
  fontFamily: typography.sansSerif
};

const mixin = {
  focus: css`
    &:focus {
      box-shadow: 0 0 0 4px ${color.primary.light};
      outline: none;
    }
  `
};

const theme = {
  color,
  typography,
  size,
  border,
  settings,
  mixin
};

export default theme;
