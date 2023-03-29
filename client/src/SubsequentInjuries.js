import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Collapse,
} from "reactstrap";

const SubsequentInjuries = () => {
  const [subsequentInjuries, setSubsequentInjuries] = useState("");
  const [moreSubsequentInjuryInformation, setMoreSubsequentInjuryInformation] =
    useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Subsequent Injuries{" "}
              {isOpen ? (
                <i
                  className="bi bi-caret-up-fill"
                  onClick={toggle}
                  style={{ cursor: "pointer", marginBottom: "1rem" }}
                ></i>
              ) : (
                <i
                  className="bi bi-caret-down-fill"
                  onClick={toggle}
                  style={{ cursor: "pointer", marginBottom: "1rem" }}
                ></i>
              )}
            </h3>

            <Collapse isOpen={isOpen}>
              <FormGroup className="custom-form-group">
                <Label for="subsequentInjuries">Subsequent Injuries</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="subsequentInjuries"
                  id="subsequentInjuries"
                  placeholder="Enter any injuries after this period and where and when they happend"
                  value={subsequentInjuries}
                  onChange={(e) => setSubsequentInjuries(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="moreSubsequentInjuryInformation">
                  Additional Subsequent Injury Information
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="moreSubsequentInjuryInformation"
                  id="moreSubsequentInjuryInformation"
                  placeholder="Enter any additional information about subsequent injuries"
                  value={moreSubsequentInjuryInformation}
                  onChange={(e) =>
                    setMoreSubsequentInjuryInformation(e.target.value)
                  }
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubsequentInjuries;
