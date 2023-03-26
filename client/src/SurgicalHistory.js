import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SurgicalHistory = () => {
  return (
    <FormGroup>
      <Label for="surgicalHistory">Surgical History</Label>
      <Input
        type="text"
        name="surgicalHistory"
        id="surgicalHistory"
        placeholder="Enter surgical history"
      />
    </FormGroup>
  );
};

export default SurgicalHistory;
