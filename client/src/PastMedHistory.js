import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const PastMedHistory = () => {
  return (
    <FormGroup>
      <Label for="pastMedHistory">Past Medical History</Label>
      <Input
        type="text"
        name="pastMedHistory"
        id="pastMedHistory"
        placeholder="Enter past medical history"
      />
    </FormGroup>
  );
};

export default PastMedHistory;
