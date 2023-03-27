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

const PriorWorkHistory = () => {
  const [priorWorkHistory, setPriorWorkHistory] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Prior Work History{" "}
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
                <Label for="priorWorkHistory">Prior Work History</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="priorWorkHistory"
                  id="priorWorkHistory"
                  placeholder="Enter prior work history"
                  value={priorWorkHistory}
                  onChange={(e) => setPriorWorkHistory(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PriorWorkHistory;
