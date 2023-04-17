import React, { useState } from "react";
import { FormGroup, Label, Input, Container, Row, Col, Collapse } from "reactstrap";

const Attention = () => {
  const [adjusterName, setAdjusterName] = useState("");
  const [adjusterCompany, setAdjusterCompany] = useState("");
  const [adjusterAddress1, setAdjusterAddress1] = useState("");
  const [adjusterAddress2, setAdjusterAddress2] = useState("");
  const [adjusterCity, setAdjusterCity] = useState("");
  const [adjusterState, setAdjusterState] = useState("");
  const [adjusterZip, setAdjusterZip] = useState("");
  const [lawyerName, setLawyerName] = useState("");
  const [lawyerCompany, setLawyerCompany] = useState("");
  const [lawyerAddress1, setLawyerAddress1] = useState("");
  const [lawyerAddress2, setLawyerAddress2] = useState("");
  const [lawyerCity, setLawyerCity] = useState("");
  const [lawyerState, setLawyerState] = useState("");
  const [lawyerZip, setLawyerZip] = useState("");
  const [lawyer2Name, setLawyer2Name] = useState("");
  const [lawyer2Company, setLawyer2Company] = useState("");
  const [lawyer2Address1, setLawyer2Address1] = useState("");
  const [lawyer2Address2, setLawyer2Address2] = useState("");
  const [lawyer2City, setLawyer2City] = useState("");
  const [lawyer2State, setLawyer2State] = useState("");
  const [lawyer2Zip, setLawyer2Zip] = useState("");

  //toggle collapse of form group
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Attention{" "}
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
              <h3>Adjuster Information</h3>
              <FormGroup className="custom-form-group">
                <Label for="adjusterName">Adjuster Name</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="adjusterName"
                  id="adjusterName"
                  placeholder="Enter adjuster name"
                  value={adjusterName}
                  onChange={(e) => setAdjusterName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="adjusterCompany">Adjuster Company</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="adjusterCompany"
                  id="adjusterCompany"
                  placeholder="Enter adjuster company"
                  value={adjusterCompany}
                  onChange={(e) => setAdjusterCompany(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="adjusterAddress1">Adjuster Address 1</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="adjusterAddress1"
                  id="adjusterAddress1"
                  placeholder="Enter adjuster address 1"
                  value={adjusterAddress1}
                  onChange={(e) => setAdjusterAddress1(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="adjusterAddress2">Adjuster Address 2</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="adjusterAddress2"
                  id="adjusterAddress2"
                  placeholder="Enter adjuster address 2"
                  value={adjusterAddress2}
                  onChange={(e) => setAdjusterAddress2(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="adjusterCity">Adjuster City</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="adjusterCity"
                  id="adjusterCity"
                  placeholder="Enter adjuster city"
                  value={adjusterCity}
                  onChange={(e) => setAdjusterCity(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="adjustState">Adjuster State</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="adjusterState"
                  id="adjusterState"
                  placeholder="Enter adjuster state"
                  value={adjusterState}
                  onChange={(e) => setAdjusterState(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="adjusterZip">Adjuster Zip</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="adjusterZip"
                  id="adjusterZip"
                  placeholder="Enter adjuster zip"
                  value={adjusterZip}
                  onChange={(e) => setAdjusterZip(e.target.value)}
                />
              </FormGroup>
              <h3>Lawyer Information</h3>
              <FormGroup className="custom-form-group">
                <Label for="lawyerName">Lawyer Name</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyerName"
                  id="lawyerName"
                  placeholder="Enter lawyer name"
                  value={lawyerName}
                  onChange={(e) => setLawyerName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyerCompany">Lawyer Company</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyerCompany"
                  id="lawyerCompany"
                  placeholder="Enter lawyer company"
                  value={lawyerCompany}
                  onChange={(e) => setLawyerCompany(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyerAddress1">Lawyer Address 1</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyerAddress1"
                  id="lawyerAddress1"
                  placeholder="Enter lawyer address 1"
                  value={lawyerAddress1}
                  onChange={(e) => setLawyerAddress1(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyerAddress2">Lawyer Address 2</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyerAddress2"
                  id="lawyerAddress2"
                  placeholder="Enter lawyer address 2"
                  value={lawyerAddress2}
                  onChange={(e) => setLawyerAddress2(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyerCity">Lawyer City</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyerCity"
                  id="lawyerCity"
                  placeholder="Enter lawyer city"
                  value={lawyerCity}
                  onChange={(e) => setLawyerCity(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyerState">Lawyer State</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyerState"
                  id="lawyerState"
                  placeholder="Enter lawyer state"
                  value={lawyerState}
                  onChange={(e) => setLawyerState(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyerZip">Lawyer Zip</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyerZip"
                  id="lawyerZip"
                  placeholder="Enter lawyer zip"
                  value={lawyerZip}
                  onChange={(e) => setLawyerZip(e.target.value)}
                />
              </FormGroup>
              <h3>Lawyer Information</h3>
              <FormGroup className="custom-form-group">
                <Label for="lawyer2Name">Lawyer Name</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyer2Name"
                  id="lawyer2Name"
                  placeholder="Enter lawyer name"
                  value={lawyer2Name}
                  onChange={(e) => setLawyer2Name(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyer2Company">Lawyer Company</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyer2Company"
                  id="lawyer2Company"
                  placeholder="Enter lawyer company"
                  value={lawyer2Company}
                  onChange={(e) => setLawyer2Company(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyer2Address1">Lawyer Address 1</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyer2Address1"
                  id="lawyer2Address1"
                  placeholder="Enter lawyer address 1"
                  value={lawyer2Address1}
                  onChange={(e) => setLawyer2Address1(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyer2Address2">Lawyer Address 2</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyer2Address2"
                  id="lawyer2Address2"
                  placeholder="Enter lawyer address 2"
                  value={lawyer2Address2}
                  onChange={(e) => setLawyer2Address2(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyer2City">Lawyer City</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyer2City"
                  id="lawyer2City"
                  placeholder="Enter lawyer city"
                  value={lawyer2City}
                  onChange={(e) => setLawyer2City(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyer2State">Lawyer State</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyer2State"
                  id="lawyer2State"
                  placeholder="Enter lawyer state"
                  value={lawyer2State}
                  onChange={(e) => setLawyer2State(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="lawyer2Zip">Lawyer Zip</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="lawyer2Zip"
                  id="lawyer2Zip"
                  placeholder="Enter lawyer zip"
                  value={lawyer2Zip}
                  onChange={(e) => setLawyer2Zip(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Attention;