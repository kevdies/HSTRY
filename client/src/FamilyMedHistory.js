import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const FamilyMedHistory = () => {
  return (
    <FormGroup>
      <Label for="familyMedHistory">Family Medical History</Label>
      <Input
        type="text"
        name="familyMedHistory"
        id="familyMedHistory"
        placeholder="Enter family medical history"
      />
    </FormGroup>
  );
};

export default FamilyMedHistory;
