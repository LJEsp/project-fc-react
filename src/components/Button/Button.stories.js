import React from "react";
import { storiesOf } from "@storybook/react";
import BaseButton from "./BaseButton";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import ButtonTertiary from "./ButtonTertiary";

import baseButtonNotes from "./baseButtonNotes.md";

storiesOf("Components/Button/BaseButton", module).add(
  "BaseButton",
  () => <BaseButton>Click me</BaseButton>,
  {
    notes: { markdown: baseButtonNotes }
  }
);

const states = [
  { name: "default", props: {}, content: "Click me" },
  { name: "width: fill", props: { width: "fill" }, content: "Click me" },
  { name: "width: icon", props: { width: "icon" }, content: "i" },
  { name: "size: small", props: { size: "small" }, content: "Click me" },
  { name: "disabled", props: { disabled: true }, content: "Click me" },
  { name: "isLoading", props: { isLoading: true }, content: "Click me" },
  {
    name: "width: icon, size: small",
    props: { width: "icon", size: "small" },
    content: "i"
  }
];

states.forEach(state => {
  storiesOf("Components/Button/ButtonPrimary", module).add(state.name, () => (
    <ButtonPrimary {...state.props}>{state.content}</ButtonPrimary>
  ));
});

states.forEach(state => {
  storiesOf("Components/Button/ButtonSecondary", module).add(state.name, () => (
    <ButtonSecondary {...state.props}>{state.content}</ButtonSecondary>
  ));
});

states.forEach(state => {
  storiesOf("Components/Button/ButtonTertiary", module).add(state.name, () => (
    <ButtonTertiary {...state.props}>{state.content}</ButtonTertiary>
  ));
});
