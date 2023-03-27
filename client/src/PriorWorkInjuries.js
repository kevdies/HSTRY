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

const PriorWorkInjuries = () => {
  const [priorWorkInjuries, setPriorWorkInjuries] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Prior Work Injuries{" "}
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
                <Label for="priorWorkInjuries">Prior Work Injuries</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="priorWorkInjuries"
                  id="priorWorkInjuries"
                  placeholder="Enter prior work injuries"
                  value={priorWorkInjuries}
                  onChange={(e) => setPriorWorkInjuries(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PriorWorkInjuries;
