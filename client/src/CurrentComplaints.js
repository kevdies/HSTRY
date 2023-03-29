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

const CurrentComplaints = () => {
  const [bodyPart, setBodyPart] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Current Complaints{" "}
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
                <Label for="body part">Body Part</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="bodyPart"
                  id="bodyPart"
                  placeholder="Enter body part"
                  value={bodyPart}
                  onChange={(e) => setBodyPart(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="frequency">Frequency</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="frequency"
                  id="frequency"
                  placeholder="enter either continuous, frequent or intermittent"
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CurrentComplaints;
