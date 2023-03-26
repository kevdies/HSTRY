import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const PriorWorkHistory = () => {
  return (
    <FormGroup>
      <Label for="priorWorkHistory">Prior Work History</Label>
      <Input
        type="text"
        name="priorWorkHistory"
        id="priorWorkHistory"
        placeholder="Enter prior work history"
      />
    </FormGroup>
  );
};

export default PriorWorkHistory;
