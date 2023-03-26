import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const CurrentWorkStatus = () => {
  return (
    <FormGroup>
      <Label for="currentWorkStatus">Current Work Status</Label>
      <Input
        type="text"
        name="currentWorkStatus"
        id="currentWorkStatus"
        placeholder="Enter current work status"
      />
    </FormGroup>
  );
};

export default CurrentWorkStatus;
