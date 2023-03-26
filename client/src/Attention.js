import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Attention = () => {
  return (
    <FormGroup>
      <Label for="attention">Attention</Label>
      <Input
        type="text"
        name="attention"
        id="attention"
        placeholder="Enter attention"
      />
    </FormGroup>
  );
};

export default Attention;
