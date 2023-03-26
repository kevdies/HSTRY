import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const JobDescription = () => {
  return (
    <FormGroup>
      <Label for="jobDescription">Job Description</Label>
      <Input
        type="text"
        name="jobDescription"
        id="jobDescription"
        placeholder="Enter job description"
      />
    </FormGroup>
  );
};

export default JobDescription;
