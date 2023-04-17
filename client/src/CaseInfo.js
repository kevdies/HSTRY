import React, { useState } from "react";
import { FormGroup, Label, Input, Container, Row, Col, Collapse, Button } from "reactstrap";

const CaseInfo = () => {
  const [appName, setAppName] = useState("");
  const [appDOB, setAppDOB] = useState("");
  const [appEmployer, setAppEmployer] = useState("");
  const [appDOI, setAppDOI] = useState("");
  const [appClaimNumber, setAppClaimNumber] = useState("");
  const [appWCABNumber, setAppWCABNumber] = useState("");
  const [appPanelQMENumber, setAppPanelQMENumber] = useState("");
  const [appDateOfEvaluation, setAppDateOfEvaluation] = useState("");
  const [evaluationAddress1, setEvaluationAddress1] = useState("");
  const [evaluationAddress2, setEvaluationAddress2] = useState("");
  const [evaluationCity, setEvaluationCity] = useState("");
  const [evaluationState, setEvaluationState] = useState("");
  const [evaluationZip, setEvaluationZip] = useState("");

  //toggle collapse of form group
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Case Information{" "}
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
                <Label for="appName">Applicant Name</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appName"
                  id="appName"
                  placeholder="Enter applicant name"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="appDOB">Applicant Date of Birth</Label>
                <Input
                  className="form-control mb-3"
                  type="date"
                  name="appDOB"
                  id="appDOB"
                  placeholder="Enter applicant date of birth"
                  value={appDOB}
                  onChange={(e) => setAppDOB(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="appEmployer">Applicant Employer</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appEmployer"
                  id="appEmployer"
                  placeholder="Enter applicant employer"
                  value={appEmployer}
                  onChange={(e) => setAppEmployer(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="appDOI">Applicant Date of Injury</Label>
                <Input
                  className="form-control mb-3"
                  type="date"
                  name="appDOI"
                  id="appDOI"
                  placeholder="Enter applicant date of injury"
                  value={appDOI}
                  onChange={(e) => setAppDOI(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="appClaimNumber">Applicant Claim Number</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appClaimNumber"
                  id="appClaimNumber"
                  placeholder="Enter applicant claim number"
                  value={appClaimNumber}
                  onChange={(e) => setAppClaimNumber(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="appWCABNumber">Applicant WCAB Number</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appWCABNumber"
                  id="appWCABNumber"
                  placeholder="Enter applicant WCAB number"
                  value={appWCABNumber}
                  onChange={(e) => setAppWCABNumber(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appPanelQMENumber">
                  Applicant Panel QME Number
                </Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appPanelQMENumber"
                  id="appPanelQMENumber"
                  placeholder="Enter applicant panel QME number"
                  value={appPanelQMENumber}
                  onChange={(e) => setAppPanelQMENumber(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appDateOfEvaluation">
                  Applicant Date of Evaluation
                </Label>
                <Input
                  className="form-control mb-3"
                  type="date"
                  name="appDateOfEvaluation"
                  id="appDateOfEvaluation"
                  placeholder="Enter applicant date of evaluation"
                  value={appDateOfEvaluation}
                  onChange={(e) => setAppDateOfEvaluation(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="evaluationAddress1">
                  Evaluation Address Line 1
                </Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="evaluationAddress1"
                  id="evaluationAddress1"
                  placeholder="Enter evaluation address line 1"
                  value={evaluationAddress1}
                  onChange={(e) => setEvaluationAddress1(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="evaluationAddress2">
                  Evaluation Address Line 2
                </Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="evaluationAddress2"
                  id="evaluationAddress2"
                  placeholder="Enter evaluation address line 2 (optional)"
                  value={evaluationAddress2}
                  onChange={(e) => setEvaluationAddress2(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="evaluationCity">Evaluation City</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="evaluationCity"
                  id="evaluationCity"
                  placeholder="Enter evaluation city"
                  value={evaluationCity}
                  onChange={(e) => setEvaluationCity(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="evaluationState">Evaluation State</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="evaluationState"
                  id="evaluationState"
                  placeholder="Enter evaluation state"
                  value={evaluationState}
                  onChange={(e) => setEvaluationState(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="evaluationZip">Evaluation Zip Code</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="evaluationZip"
                  id="evaluationZip"
                  placeholder="Enter evaluation zip code"
                  value={evaluationZip}
                  onChange={(e) => setEvaluationZip(e.target.value)}
                />
              </FormGroup>
              <Button
                color="secondary"
                onClick={toggle}
                style={{ marginTop: "1rem" }}
              >
                Close
              </Button>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CaseInfo;
