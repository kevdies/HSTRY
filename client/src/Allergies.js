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

const Allergies = () => {
  const [allergies, setAllergies] = useState("");
  const [hasAllergies, setHasAllergies] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Allergies{" "}
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
              <FormGroup check className="custom-form-group">
                <Label check>
                  <Input
                    type="checkbox"
                    name="hasAllergies"
                    id="hasAllergies"
                    checked={hasAllergies}
                    onChange={(e) => setHasAllergies(e.target.checked)}
                  />{" "}
                  Has Allergies?
                </Label>
              </FormGroup>
              {hasAllergies && (
                <FormGroup className="custom-form-group">
                  <Label for="allergies">Allergies</Label>
                  <Input
                    className="form-control mb-3"
                    type="text"
                    name="allergies"
                    id="allergies"
                    placeholder="Enter allergies"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                  />
                </FormGroup>
              )}
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Allergies;
