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

const OtherProblems = () => {
  const [otherProblems, setOtherProblems] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Other Problems{" "}
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
                <FormGroup>
                  <Label for="otherProblems">Other Problems:</Label>
                  <Input
                    type="textarea"
                    name="otherProblems"
                    id="otherProblems"
                    placeholder="comma separated list of problems i.e. stress, anxiety, depression, insomnia, stomach issues, etc"
                    onChange={(e) => setOtherProblems(e.target.value)}
                  />
                </FormGroup>
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OtherProblems;
