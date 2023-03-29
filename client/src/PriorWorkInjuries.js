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

const PriorWorkInjuries = () => {
  const [priorWorkInjuries, setPriorWorkInjuries] = useState("");
    const [priorWorkInjuryClaims, setPriorWorkInjuryClaims] = useState("");
    const [claimsSettled, setClaimsSettled] = useState("");
    const [resultingRestrictions, setResultingRestrictions] = useState("");
    const [priorRecovery, setPriorRecovery] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Prior Work Injuries{" "}
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
                <Label for="priorWorkInjuries">Prior Work Injuries</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="priorWorkInjuries"
                  id="priorWorkInjuries"
                  placeholder="Enter prior work injuries"
                  value={priorWorkInjuries}
                  onChange={(e) => setPriorWorkInjuries(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="priorWorkInjuryClaims">
                  Prior Work Injury Claims
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="priorWorkInjuryClaims"
                  id="priorWorkInjuryClaims"
                  placeholder="Enter any prior work injury claims"
                  value={priorWorkInjuryClaims}
                  onChange={(e) => setPriorWorkInjuryClaims(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="claimsSettled">Claims Settled</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="claimsSettled"
                  id="claimsSettled"
                  placeholder="Enter any settled claims"
                  value={claimsSettled}
                  onChange={(e) => setClaimsSettled(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="resultingRestrictions">
                  Resulting Restrictions
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="resultingRestrictions"
                  id="resultingRestrictions"
                  placeholder="Enter any resulting restrictions"
                  value={resultingRestrictions}
                  onChange={(e) => setResultingRestrictions(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="priorRecovery">Prior Recovery</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="priorRecovery"
                  id="priorRecovery"
                  placeholder="Enter any prior recovery information i.e. fully recovered, still symptomatic"
                  value={priorRecovery}
                  onChange={(e) => setPriorRecovery(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PriorWorkInjuries;
