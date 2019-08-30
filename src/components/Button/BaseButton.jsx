import React from "react";
import styled, { css } from "styled-components/macro";

const width = css`
  ${p =>
    (p.width === "fill" &&
      css`
        width: 100%;
      `) ||
    (p.width === "icon" &&
      css`
        padding: 0;
        min-width: ${p => p.theme.size.button};
      `)}
`;

const size = css`
  ${p =>
    p.size === "small" &&
    css`
      height: ${p => p.theme.size.l};
      min-width: ${p => p.theme.size.l};
      font-size: ${p => p.theme.typography.scale.regular};
    `}
`;

const SC = {
  BaseButton: styled.button`
    ${p => p.theme.typography.mixin.button}
    ${p => p.theme.mixin.focus}

    height: ${p => p.theme.size.button};
    padding: 0 ${p => p.theme.size.l};
    border: none;
    border-radius: ${p => p.theme.border.radius};
    cursor: pointer;
    transition-duration: 100ms;

    &:disabled {
      cursor: not-allowed;
    }

    ${width}
    ${size}
   `
};

function BaseButton({ isLoading, children, ...props }) {
  const content = isLoading ? "Loading" : children;

  return <SC.BaseButton {...props}>{content}</SC.BaseButton>;
}

export default BaseButton;
