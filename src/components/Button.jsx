import React from "react";
import styled from "styled-components/macro";

const SC = {
  Button: styled.button`
    background-color: ${p => p.theme.color.primary.main};
    border: none;
  `
};

function Button({ children, ...rest }) {
  return <SC.Button {...rest}>{children}</SC.Button>;
}

export default Button;
