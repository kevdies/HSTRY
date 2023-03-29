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

const SocialHistory = () => {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [children, setChildren] = useState("");
  const [substanceUse, setSubstanceUse] = useState("");
  const [leisureActivities, setLeisureActivities] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Social History{" "}
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
                <Label for="maritalStatus">Marital Status</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="maritalStatus"
                  id="maritalStatus"
                  placeholder="Enter marital status"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="children">Children</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="children"
                  id="children"
                  placeholder="Enter any children-related information"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="substanceUse">Substance Use</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="substanceUse"
                  id="substanceUse"
                  placeholder="Enter any substance use-related information"
                  value={substanceUse}
                  onChange={(e) => setSubstanceUse(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="leisureActivities">Leisure Activities</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="leisureActivities"
                  id="leisureActivities"
                  placeholder="Enter any leisure activities"
                  value={leisureActivities}
                  onChange={(e) => setLeisureActivities(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SocialHistory;
