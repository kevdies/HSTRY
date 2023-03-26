import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const CaseInfo = () => {
  return (
    <FormGroup>
      <Label for="caseInfo">Case Info</Label>
      <Input
        type="text"
        name="caseInfo"
        id="caseInfo"
        placeholder="Enter case info"
      />
    </FormGroup>
  );
};

export default CaseInfo;
