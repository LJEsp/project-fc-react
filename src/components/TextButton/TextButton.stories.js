import React from "react";
import { storiesOf } from "@storybook/react";

import TextButton from "./TextButton";

storiesOf("Components/TextButton", module).add("default", () => (
  <TextButton>Text Button</TextButton>
));
