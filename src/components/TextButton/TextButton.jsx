import React from "react";
import styled from "styled-components/macro";

const SC = {
  TextButton: styled.a`
    ${p => p.theme.type.mixin.button};

    color: ${p => p.theme.color.primary.main};
    cursor: pointer;

    &:hover {
      color: ${p => p.theme.color.primary.dark};
    }

    &:focus {
      text-decoration: underline;
    }
  `
};

function TextButton({ children, ...props }) {
  return <SC.TextButton {...props}>{children}</SC.TextButton>;
}

export default TextButton;
