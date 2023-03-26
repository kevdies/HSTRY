import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const OtherProblems = () => {
  return (
    <FormGroup>
      <Label for="otherProblems">Other Problems</Label>
      <Input
        type="text"
        name="otherProblems"
        id="otherProblems"
        placeholder="Enter other problems"
      />
    </FormGroup>
  );
};

export default OtherProblems;
