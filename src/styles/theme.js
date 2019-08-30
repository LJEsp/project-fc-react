import { css } from "styled-components";

const color = {
  primary: {
    main: "#F16518",
    light: "#FF964A",
    dark: "#B73400"
  }
};

const type = {
  sansSerif: "Poppins, sans-serif",
  scale: {
    tiny: "0.6875", // 11px
    small: "0.875em", // 14px
    regular: "1em", // 16px
    large: "1.1875em", // 19px
    headline3: "1.5em", // 20px
    headline2: "2em", // 28px
    headline1: "3.875em" // 40px
  }
};

const typeMixin = {
  tiny: css`
    font-size: ${type.scale.tiny};
    font-weight: 600;
  `,
  small: css`
    font-size: ${type.scale.small};
    font-weight: 400;
  `,
  caption: css`
    font-size: ${type.scale.small};
    font-weight: 600;
  `,
  regular: css`
    font-size: ${type.scale.regular};
  `,
  button: css`
    font-size: ${type.scale.large};
    font-weight: 600;
    text-transform: uppercase;
  `,
  headline4: css`
    font-size: ${type.scale.large};
    font-weight: 400;
  `,
  headline3: css`
    font-size: ${type.scale.headline3};
    font-weight: 600;
  `,
  headline2: css`
    font-size: ${type.scale.headline2};
    font-weight: 600;
  `,
  headline1: css`
    font-size: ${type.scale.headline1};
    font-weight: 400;
    text-transform: uppercase;
  `
};

const size = {
  xxs: "0.125rem", // 2px
  xs: "0.25rem", // 4px
  s: "0.5rem", // 8px
  m: "1rem", // 16px
  l: "2rem", // 32px
  xl: "4rem" // 64px
};

const settings = {
  fontSize: "16px",
  fontImports: css`
    @import url("https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap");
  `,
  fontFamily: type.sansSerif
};

const theme = {
  color,
  type,
  typeMixin,
  size,
  settings
};

export default theme;
