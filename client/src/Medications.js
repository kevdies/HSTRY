import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Medications = () => {
  return (
    <FormGroup>
      <Label for="medications">Medications</Label>
      <Input
        type="text"
        name="medications"
        id="medications"
        placeholder="Enter medications"
      />
    </FormGroup>
  );
};

export default Medications;
