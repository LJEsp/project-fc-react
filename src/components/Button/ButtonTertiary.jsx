import React from "react";
import styled from "styled-components/macro";

import BaseButton from "./BaseButton";

const SC = {
  ButtonTertiary: styled(BaseButton)`
    background-color: unset;
    color: ${p => p.theme.color.primary.main};

    &:hover {
      background-color: ${p => p.theme.color.neutral.light};
    }

    &:active {
      background-color: ${p => p.theme.color.primary.main};
      color: ${p => p.theme.color.basic.light};
    }

    &:disabled {
      background-color: ${p => p.theme.color.neutral.light};
      color: ${p => p.theme.color.neutral.medium};
    }
  `
};

function ButtonTertiary({ children, ...props }) {
  return <SC.ButtonTertiary {...props}>{children}</SC.ButtonTertiary>;
}

export default ButtonTertiary;
