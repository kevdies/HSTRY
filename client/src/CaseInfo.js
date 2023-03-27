import React, { useState } from "react";
import { FormGroup, Label, Input, Container, Row, Col } from "reactstrap";

const CaseInfo = () => {
  const [appName, setAppName] = useState("");
  const [appDOB, setAppDOB] = useState("");
  const [appEmployer, setAppEmployer] = useState("");
  const [appDOI, setAppDOI] = useState("");
  const [appClaimNumber, setAppClaimNumber] = useState("");
  const [appWCABNumber, setAppWCABNumber] = useState("");
  const [appPanelQMENumber, setAppPanelQMENumber] = useState("");
  const [appDateOfEvaluation, setAppDateOfEvaluation] = useState("");
  const [appAddress1, setAppAddress1] = useState("");
  const [appAddress2, setAppAddress2] = useState("");
  const [appCity, setAppCity] = useState("");
  const [appState, setAppState] = useState("");
  const [appZip, setAppZip] = useState("");

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>Case Information</h3>
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
              <Label for="appPanelQMENumber">Applicant Panel QME Number</Label>
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
              <Label for="appAddress1">Applicant Address Line 1</Label>
              <Input
                className="form-control mb-3"
                type="text"
                name="appAddress1"
                id="appAddress1"
                placeholder="Enter applicant address line 1"
                value={appAddress1}
                onChange={(e) => setAppAddress1(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="custom-form-group">
              <Label for="appAddress2">Applicant Address Line 2</Label>
              <Input
                className="form-control mb-3"
                type="text"
                name="appAddress2"
                id="appAddress2"
                placeholder="Enter applicant address line 2 (optional)"
                value={appAddress2}
                onChange={(e) => setAppAddress2(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="custom-form-group">
              <Label for="appCity">Applicant City</Label>
              <Input
                className="form-control mb-3"
                type="text"
                name="appCity"
                id="appCity"
                placeholder="Enter applicant city"
                value={appCity}
                onChange={(e) => setAppCity(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="custom-form-group">
              <Label for="appState">Applicant State</Label>
              <Input
                className="form-control mb-3"
                type="text"
                name="appState"
                id="appState"
                placeholder="Enter applicant state"
                value={appState}
                onChange={(e) => setAppState(e.target.value)}
              />
            </FormGroup>

            <FormGroup className="custom-form-group">
              <Label for="appZip">Applicant Zip Code</Label>
              <Input
                className="form-control mb-3"
                type="text"
                name="appZip"
                id="appZip"
                placeholder="Enter applicant zip code"
                value={appZip}
                onChange={(e) => setAppZip(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CaseInfo;
