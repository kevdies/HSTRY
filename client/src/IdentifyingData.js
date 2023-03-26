import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const IdentifyingData = () => {
  return (
    <FormGroup>
      <Label for="identifyingData">Identifying Data</Label>
      <Input
        type="text"
        name="identifyingData"
        id="identifyingData"
        placeholder="Enter identifying data"
      />
    </FormGroup>
  );
};

export default IdentifyingData;
