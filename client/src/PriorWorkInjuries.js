import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const PriorWorkInjuries = () => {
  return (
    <FormGroup>
      <Label for="priorWorkInjuries">Prior Work Injuries</Label>
      <Input
        type="text"
        name="priorWorkInjuries"
        id="priorWorkInjuries"
        placeholder="Enter prior work injuries"
      />
    </FormGroup>
  );
};

export default PriorWorkInjuries;
