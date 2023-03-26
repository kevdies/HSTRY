import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const Allergies = () => {
  return (
    <FormGroup>
      <Label for="allergies">Allergies</Label>
      <Input
        type="text"
        name="allergies"
        id="allergies"
        placeholder="Enter allergies"
      />
    </FormGroup>
  );
};

export default Allergies;
