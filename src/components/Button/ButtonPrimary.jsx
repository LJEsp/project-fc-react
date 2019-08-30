import React from "react";
import styled from "styled-components/macro";

import BaseButton from "./BaseButton";

const SC = {
  ButtonPrimary: styled(BaseButton)`
    background-color: ${p => p.theme.color.primary.main};
    color: ${p => p.theme.color.basic.light};

    &:hover {
      background-color: ${p => p.theme.color.primary.dark};
    }

    &:active {
      background-color: ${p => p.theme.color.primary.main};
    }

    &:disabled {
      background-color: ${p => p.theme.color.neutral.medium};
    }
  `
};

function ButtonPrimary({ children, ...props }) {
  return <SC.ButtonPrimary {...props}>{children}</SC.ButtonPrimary>;
}

export default ButtonPrimary;
