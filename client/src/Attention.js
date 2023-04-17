import React, { useState } from "react";
import { FormGroup, Label, Input, Container, Row, Col, Collapse, Button } from "reactstrap";

const Attention = () => {
  const [adjusterName, setAdjusterName] = useState("");
  const [adjusterCompany, setAdjusterCompany] = useState("");
  const [adjusterAddress1, setAdjusterAddress1] = useState("");
  const [adjusterAddress2, setAdjusterAddress2] = useState("");
  const [adjusterCity, setAdjusterCity] = useState("");
  const [adjusterState, setAdjusterState] = useState("");
  const [adjusterZip, setAdjusterZip] = useState("");
  const [lawyers, setLawyers] = useState([
    {
      name: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    },
    {
      name: "",
      company: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    },
  ]);

   const handleLawyerChange = (e, index) => {
     const { name, value } = e.target;
     const newLawyers = [...lawyers];
     newLawyers[index][name] = value;
     setLawyers(newLawyers);
   };

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
              {lawyers.map((lawyer, index) => (
                <div key={index}>
                  <h3>Lawyer {index + 1} Information</h3>
                  <FormGroup className="custom-form-group">
                    <Label for={`lawyerName${index}`}>Lawyer Name</Label>
                    <Input
                      className="form-control mb-3"
                      type="text"
                      name="name"
                      id={`lawyerName${index}`}
                      placeholder="Enter lawyer name"
                      value={lawyer.name}
                      onChange={(e) => handleLawyerChange(e, index)}
                    />
                  </FormGroup>
                  <FormGroup className="custom-form-group">
                    <Label for={`lawyerCompany${index}`}>Company</Label>
                    <Input
                      className="form-control mb-3"
                      type="text"
                      name="company"
                      id={`lawyerCompany${index}`}
                      placeholder="Enter company name"
                      value={lawyer.company}
                      onChange={(e) => handleLawyerChange(e, index)}
                    />
                  </FormGroup>
                  <FormGroup className="custom-form-group">
                    <Label for={`lawyerAddress1${index}`}>Address 1</Label>
                    <Input
                      className="form-control mb-3"
                      type="text"
                      name="address1"
                      id={`lawyerAddress1${index}`}
                      placeholder="Enter address line 1"
                      value={lawyer.address1}
                      onChange={(e) => handleLawyerChange(e, index)}
                    />
                  </FormGroup>
                  <FormGroup className="custom-form-group">
                    <Label for={`lawyerAddress2${index}`}>Address 2</Label>
                    <Input
                      className="form-control mb-3"
                      type="text"
                      name="address2"
                      id={`lawyerAddress2${index}`}
                      placeholder="Enter address line 2"
                      value={lawyer.address2}
                      onChange={(e) => handleLawyerChange(e, index)}
                    />
                  </FormGroup>
                  <FormGroup className="custom-form-group">
                    <Label for={`lawyerCity${index}`}>City</Label>
                    <Input
                      className="form-control mb-3"
                      type="text"
                      name="city"
                      id={`lawyerCity${index}`}
                      placeholder="Enter city"
                      value={lawyer.city}
                      onChange={(e) => handleLawyerChange(e, index)}
                    />
                  </FormGroup>
                  <FormGroup className="custom-form-group">
                    <Label for={`lawyerState${index}`}>State</Label>
                    <Input
                      className="form-control mb-3"
                      type="text"
                      name="state"
                      id={`lawyerState${index}`}
                      placeholder="Enter state"
                      value={lawyer.state}
                      onChange={(e) => handleLawyerChange(e, index)}
                    />
                  </FormGroup>
                  <FormGroup className="custom-form-group">
                    <Label for={`lawyerZip${index}`}>Zip Code</Label>
                    <Input
                      className="form-control mb-3"
                      type="text"
                      name="zip"
                      id={`lawyerZip${index}`}
                      placeholder="Enter zip code"
                      value={lawyer.zip}
                      onChange={(e) => handleLawyerChange(e, index)}
                    />
                  </FormGroup>
                </div>
              ))}
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

export default Attention;