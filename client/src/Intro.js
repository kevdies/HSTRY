import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  Collapse,
  Button
} from "reactstrap";

const Intro = () => {
  const [appName, setAppName] = useState("");
  const [appBodyPart, setAppBodyPart] = useState("");
  const [appDOI, setAppDOI] = useState("");
  const [historian, setHistorian] = useState("");

  //toggle collapse of form group
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Introduction{" "}
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
                  onChange={(e) => setAppDOI(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="historian">Historian</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="historian"
                  id="historian"
                  placeholder="Enter historian first and last name"
                  value={historian}
                  onChange={(e) => setHistorian(e.target.value)}
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

export default Intro;
