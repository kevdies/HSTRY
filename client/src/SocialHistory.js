import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SocialHistory = () => {
  return (
    <FormGroup>
      <Label for="socialHistory">Social History</Label>
      <Input
        type="text"
        name="socialHistory"
        id="socialHistory"
        placeholder="Enter social history"
      />
    </FormGroup>
  );
};

export default SocialHistory;
