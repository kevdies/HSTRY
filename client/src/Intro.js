import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Intro = () => {
  return (
    <FormGroup>
      <Label for="intro">Intro</Label>
      <Input type="text" name="intro" id="intro" placeholder="Enter intro" />
    </FormGroup>
  );
};

export default Intro;
