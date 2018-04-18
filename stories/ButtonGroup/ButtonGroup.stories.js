import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import { ButtonToolbar, ButtonGroup, Button } from "../../src";

import ButtonGroupDropdownExample from "./ButtonGroupDropdownExample";

import Esempi from "./Esempi.md";
import Toolbar from "./Toolbar.md";
import Dimensioni from "./Dimensioni.md";
import Vertical from "./Vertical.md";
import Nesting from "./Nesting.md";

const stories = storiesOf("Componenti/Button Group", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ))
);
stories.add(
  "Toolbar",
  withDocs(Toolbar, () => (
    <ButtonToolbar>
      <ButtonGroup className="mr-1">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-1">
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-1">
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
  ))
);
stories.add(
  "Dimensioni",
  withDocs(Dimensioni, () => (
    <section>
      <div>
        <ButtonGroup size="lg">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mt-3">
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div className="mt-3">
        <ButtonGroup size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
    </section>
  ))
);
stories.add(
  "Vertical",
  withDocs(Vertical, () => (
    <ButtonGroup vertical>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  ))
);

const moreStories = storiesOf("Componenti/Button Group/Nesting", module);

moreStories.add(
  "Esempi",
  withDocs(Nesting, () => <ButtonGroupDropdownExample />)
);
