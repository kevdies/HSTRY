import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const PriorNonWorkInjuries = () => {
  return (
    <FormGroup>
      <Label for="priorNonWorkInjuries">Prior Non-Work Injuries</Label>
      <Input
        type="text"
        name="priorNonWorkInjuries"
        id="priorNonWorkInjuries"
        placeholder="Enter prior non-work injuries"
      />
    </FormGroup>
  );
};

export default PriorNonWorkInjuries;
