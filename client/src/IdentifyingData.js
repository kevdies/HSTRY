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

const IdentifyingData = () => {
  const [appHandedness, setAppHandedness] = useState("");
  const [appAge, setAppAge] = useState("");
  const [appHeightFeet, setAppHeightFeet] = useState("");
  const [appHeightInches, setAppHeightInches] = useState("");
  const [appWeight, setAppWeight] = useState("");
  const [appAddress1, setAppAddress1] = useState("");
  const [appAddress2, setAppAddress2] = useState("");
  const [appCity, setAppCity] = useState("");
  const [appState, setAppState] = useState("");
  const [appZip, setAppZip] = useState("");
  const [appDOB, setAppDOB] = useState("");
  const [appBodyPart, setAppBodyPart] = useState("");
  const [appDOI, setAppDOI] = useState("");
  const [appEmployeeTitle, setAppEmployeeTitle] = useState("");
  const [appEmployer, setAppEmployer] = useState("");

  //toggle collapse of form group
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Identifying Data{" "}
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
                <Label>Applicant Handedness</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="appHandedness"
                      id="appHandednessLeft"
                      checked={appHandedness === "left"}
                      onChange={(e) => setAppHandedness("left")}
                    />{" "}
                    Left-Handed
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="appHandedness"
                      id="appHandednessRight"
                      checked={appHandedness === "right"}
                      onChange={(e) => setAppHandedness("right")}
                    />{" "}
                    Right-Handed
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appAge">Applicant Age</Label>
                <Input
                  className="form-control mb-3"
                  type="number"
                  name="appAge"
                  id="appAge"
                  placeholder="Enter applicant age"
                  value={appAge}
                  onChange={(e) => setAppAge(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appHeightFeet">Applicant Height (Feet)</Label>
                <Input
                  className="form-control mb-3"
                  type="number"
                  name="appHeightFeet"
                  id="appHeightFeet"
                  placeholder="Enter applicant height in feet"
                  value={appHeightFeet}
                  onChange={(e) => setAppHeightFeet(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appHeightInches">Applicant Height (Inches)</Label>
                <Input
                  className="form-control mb-3"
                  type="number"
                  name="appHeightInches"
                  id="appHeightInches"
                  placeholder="Enter applicant height in inches"
                  value={appHeightInches}
                  onChange={(e) => setAppHeightInches(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="appWeight">Applicant Weight</Label>
                <Input
                  className="form-control mb-3"
                  type="number"
                  name="appWeight"
                  id="appWeight"
                  placeholder="Enter applicant weight in pounds"
                  value={appWeight}
                  onChange={(e) => setAppWeight(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appAddress1">Applicant Address 1</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appAddress1"
                  id="appAddress1"
                  placeholder="Enter applicant address 1"
                  value={appAddress1}
                  onChange={(e) => setAppAddress1(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appAddress2">Applicant Address 2</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appAddress2"
                  id="appAddress2"
                  placeholder="Enter applicant address 2"
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
                <Label for="appZip">Applicant Zip</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appZip"
                  id="appZip"
                  placeholder="Enter applicant zip"
                  value={appZip}
                  onChange={(e) => setAppZip(e.target.value)}
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
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setAppDOB(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appBodyPart">Applicant Body Part</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appBodyPart"
                  id="appBodyPart"
                  placeholder="Enter applicant body part"
                  value={appBodyPart}
                  onChange={(e) => setAppBodyPart(e.target.value)}
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
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setAppDOI(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appEmployeeTitle">Applicant Employee Title</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appEmployeeTitle"
                  id="appEmployeeTitle"
                  placeholder="Enter applicant employee title"
                  value={appEmployeeTitle}
                  onChange={(e) => setAppEmployeeTitle(e.target.value)}
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
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IdentifyingData;
