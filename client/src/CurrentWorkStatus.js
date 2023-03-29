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

const CurrentWorkStatus = () => {
  const [currentWorkStatus, setCurrentWorkStatus] = useState("");
  const [stillEmployedBy, setStillEmployedBy] = useState("");
  const [currentDisabilityBenefits, setCurrentDisabilityBenefits] =
    useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Current Work Status{" "}
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
                <Label for="currentWorkStatus">Current Work Status</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="currentWorkStatus"
                  id="currentWorkStatus"
                  placeholder="Enter current work status and with what company"
                  value={currentWorkStatus}
                  onChange={(e) => setCurrentWorkStatus(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="stillEmployedBy">Still Employed By</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="stillEmployedBy"
                  id="stillEmployedBy"
                  placeholder="Enter if the applicant is still employed and for who"
                  value={stillEmployedBy}
                  onChange={(e) => setStillEmployedBy(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="currentDisabilityBenefits">
                  Current Disability Benefits
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="currentDisabilityBenefits"
                  id="currentDisabilityBenefits"
                  placeholder="Enter any current disability benefits"
                  value={currentDisabilityBenefits}
                  onChange={(e) => setCurrentDisabilityBenefits(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CurrentWorkStatus;
