import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const HistoryOfInjury = () => {
  return (
    <FormGroup>
      <Label for="historyOfInjury">History of Injury</Label>
      <Input
        type="text"
        name="historyOfInjury"
        id="historyOfInjury"
        placeholder="Enter history of injury"
      />
    </FormGroup>
  );
};

export default HistoryOfInjury;
