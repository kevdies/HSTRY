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

const JobDescription = () => {
  const [jobDescription, setJobDescription] = useState("");

  //toggle collapse of form group
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Job Description{" "}
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
                <Label for="jobDescription">Job Description</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="jobDescription"
                  id="jobDescription"
                  placeholder="Enter job description"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobDescription;
