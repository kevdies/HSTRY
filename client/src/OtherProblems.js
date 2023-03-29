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
  const [hasOtherProblems, setHasOtherProblems] = useState(false);
 const [stress, setStress] = useState(false);
 const [anxiety, setAnxiety] = useState(false);
 const [depression, setDepression] = useState(false);
 const [insomnia, setInsomnia] = useState(false);
  const [stomachIssues, setStomachIssues] = useState(false);
  const [otherProblems, setOtherProblems] = useState("");



  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleOtherProblemsChange = (e) => {
    const { value } = e.target;
    setHasOtherProblems(value === "yes");
  };

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
                <Label>Does the applicant have other problems?</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="hasOtherProblems"
                      value="no"
                      checked={!hasOtherProblems}
                      onChange={handleOtherProblemsChange}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="hasOtherProblems"
                      value="yes"
                      checked={hasOtherProblems}
                      onChange={handleOtherProblemsChange}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
              </FormGroup>

              {hasOtherProblems && (
                <>
                  <FormGroup>
                    <Label>Check all that apply:</Label>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          onChange={(e) => setStress(e.target.checked)}
                        />{" "}
                        Stress
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          onChange={(e) => setAnxiety(e.target.checked)}
                        />{" "}
                        Anxiety
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          onChange={(e) => setDepression(e.target.checked)}
                        />{" "}
                        Depression
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          onChange={(e) => setInsomnia(e.target.checked)}
                        />{" "}
                        Insomnia
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          onChange={(e) => setStomachIssues(e.target.checked)}
                        />{" "}
                        Stomach Issues
                      </Label>
                    </FormGroup>
                    <FormGroup>
                      <Label for="otherProblems">Other Problems:</Label>
                      <Input
                        type="textarea"
                        name="otherProblems"
                        id="otherProblems"
                        placeholder="comma separated list of problems"
                        onChange={(e) => setOtherProblems(e.target.value)}
                      />
                    </FormGroup>
                  </FormGroup>
                </>
              )}
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OtherProblems;
