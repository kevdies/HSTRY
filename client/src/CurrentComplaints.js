import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const CurrentComplaints = () => {
  return (
    <FormGroup>
      <Label for="currentComplaints">Current Complaints</Label>
      <Input
        type="text"
        name="currentComplaints"
        id="currentComplaints"
        placeholder="Enter current complaints"
      />
    </FormGroup>
  );
};

export default CurrentComplaints;
