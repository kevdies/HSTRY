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

const PriorNonWorkInjuries = () => {
  const [priorNonWorkInjuries, setPriorNonWorkInjuries] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Prior Non-Work Injuries{" "}
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
                <Label for="priorNonWorkInjuries">
                  Prior Non-Work Injuries
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="priorNonWorkInjuries"
                  id="priorNonWorkInjuries"
                  placeholder="Enter any prior non-work injuries or 'applicant denies non-work injuries'"
                  value={priorNonWorkInjuries}
                  onChange={(e) => setPriorNonWorkInjuries(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PriorNonWorkInjuries;
