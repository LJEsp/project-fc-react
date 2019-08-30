import React from "react";
import styled from "styled-components/macro";

import BaseButton from "./BaseButton";

const SC = {
  ButtonSecondary: styled(BaseButton)`
    background-color: unset;
    color: ${p => p.theme.color.primary.main};
    border: 2px solid ${p => p.theme.color.primary.main};

    &:hover {
      background-color: ${p => p.theme.color.primary.dark};
      color: ${p => p.theme.color.basic.light};
    }

    &:active {
      background-color: ${p => p.theme.color.primary.main};
    }

    &:disabled {
      background-color: ${p => p.theme.color.neutral.light};
      color: ${p => p.theme.color.neutral.medium};
      border: 2px solid ${p => p.theme.color.neutral.medium};
    }
  `
};

function ButtonSecondary({ children, ...props }) {
  return <SC.ButtonSecondary {...props}>{children}</SC.ButtonSecondary>;
}

export default ButtonSecondary;
