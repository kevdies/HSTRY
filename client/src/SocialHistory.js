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
  // const [socialHistory, setSocialHistory] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [hasChildren, setHasChildren] = useState(false);
  const [alcoholUse, setAlcoholUse] = useState(false);
  const [tobaccoUse, setTobaccoUse] = useState(false);
  const [marijuanaUse, setMarijuanaUse] = useState(false);
  const [hasOtherDrugUse, setHasOtherDrugUse] = useState("");
  const [otherDrugList, setOtherDrugList] = useState("");
  const [numChildren, setNumChildren] = useState("")


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
                <Label>Marital Status</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="maritalStatus"
                      id="single"
                      checked={maritalStatus === "single"}
                      onChange={(e) => setMaritalStatus("single")}
                    />{" "}
                    Single
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="maritalStatus"
                      id="married"
                      checked={maritalStatus === "married"}
                      onChange={(e) => setMaritalStatus("married")}
                    />{" "}
                    Married
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="maritalStatus"
                      id="divorced"
                      checked={maritalStatus === "divorced"}
                      onChange={(e) => setMaritalStatus("divorced")}
                    />{" "}
                    Divorced
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="maritalStatus"
                      id="separated"
                      checked={maritalStatus === "separated"}
                      onChange={(e) => setMaritalStatus("separated")}
                    />{" "}
                    Separated
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label>Children</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="hasChildren"
                      id="hasChildren"
                      checked={hasChildren}
                      onChange={(e) => setHasChildren(e.target.checked)}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                {hasChildren && (
                  <Input
                    className="form-control mb-3"
                    type="number"
                    name="numChildren"
                    id="numChildren"
                    placeholder="Enter number of children"
                    value={numChildren}
                    onChange={(e) => setNumChildren(e.target.value)}
                  />
                )}
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label>Alcohol Use</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="alcoholUse"
                      id="alcoholUse"
                      checked={alcoholUse}
                      onChange={(e) => setAlcoholUse(e.target.checked)}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label>Tobacco Use</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="tobaccoUse"
                      id="tobaccoUse"
                      checked={tobaccoUse}
                      onChange={(e) => setTobaccoUse(e.target.checked)}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label>Marijuana Use</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="marijuanaUse"
                      id="marijuanaUse"
                      checked={marijuanaUse}
                      onChange={(e) => setMarijuanaUse(e.target.checked)}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label>Other Drug Use</Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="hasOtherDrugUse"
                      id="hasOtherDrugUse"
                      checked={hasOtherDrugUse}
                      onChange={(e) => setHasOtherDrugUse(e.target.checked)}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                {hasOtherDrugUse && (
                  <Input
                    className="form-control mb-3"
                    type="text"
                    name="otherDrugList"
                    id="otherDrugList"
                    placeholder="Enter other drugs used"
                    value={otherDrugList}
                    onChange={(e) => setOtherDrugList(e.target.value)}
                  />
                )}
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SocialHistory;
