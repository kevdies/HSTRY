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

const PriorWorkHistory = () => {
  const [priorCompanyName, setPriorCompanyName] = useState("");
  const [priorCompanyBeginDate, setPriorCompanyBeginDate] = useState("");
  const [priorCompanyEndDate, setPriorCompanyEndDate] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Prior Work History{" "}
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
                <Label for="priorCompanyName">Prior Company Name</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="priorCompanyName"
                  id="priorCompanyName"
                  placeholder="Enter prior company name"
                  value={priorCompanyName}
                  onChange={(e) => setPriorCompanyName(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="priorCompanyBeginDate">
                  Prior Company Begin Date
                </Label>
                <Input
                  className="form-control mb-3"
                  type="date"
                  name="priorCompanyBeginDate"
                  id="priorCompanyBeginDate"
                  placeholder="Enter prior company begin date"
                  value={priorCompanyBeginDate}
                  onChange={(e) => setPriorCompanyBeginDate(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="priorCompanyEndDate">Prior Company End Date</Label>
                <Input
                  className="form-control mb-3"
                  type="date"
                  name="priorCompanyEndDate"
                  id="priorCompanyEndDate"
                  placeholder="Enter prior company end date"
                  value={priorCompanyEndDate}
                  onChange={(e) => setPriorCompanyEndDate(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PriorWorkHistory;
