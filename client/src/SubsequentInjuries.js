import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SubsequentInjuries = () => {
  return (
    <FormGroup>
      <Label for="subsequentInjuries">Subsequent Injuries</Label>
      <Input
        type="text"
        name="subsequentInjuries"
        id="subsequentInjuries"
        placeholder="Enter subsequent injuries"
      />
    </FormGroup>
  );
};

export default SubsequentInjuries;
