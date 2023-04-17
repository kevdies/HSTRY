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

const PriorWorkHistory = () => {
  const [priorCompanyName, setPriorCompanyName] = useState("");
  const [priorCompanyBeginDate, setPriorCompanyBeginDate] = useState("");
  const [priorCompanyEndDate, setPriorCompanyEndDate] = useState("");
  const [priorCompanyJobDescription, setPriorCompanyJobDescription] =
    useState("");
  const [priorCompanyExposure, setPriorCompanyExposure] = useState("");
  const [priorCompanyPhysicalActivities, setPriorCompanyPhysicalActivities] =
    useState("");
  const [deniesHistory, setDeniesHistory] = useState("");


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
                <Label for="deniesHistory">Denies Prior Work History</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="deniesHistory"
                  id="deniesHistory"
                  placeholder="enter 'Applicant denies prior work history' and move onto next section"
                  value={deniesHistory}
                  onChange={(e) => setDeniesHistory(e.target.value)}
                />
              </FormGroup>
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
              <FormGroup className="custom-form-group">
                <Label for="priorCompanyJobDescription">
                  Prior Company Job Description
                </Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="priorCompanyJobDescription"
                  id="priorCompanyJobDescription"
                  placeholder="Enter prior company job description"
                  value={priorCompanyJobDescription}
                  onChange={(e) =>
                    setPriorCompanyJobDescription(e.target.value)
                  }
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="priorCompanyExposure">Prior Company Exposure</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="priorCompanyExposure"
                  id="priorCompanyExposure"
                  placeholder="Enter prior company exposure"
                  value={priorCompanyExposure}
                  onChange={(e) => setPriorCompanyExposure(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="priorCompanyPhysicalActivities">
                  Prior Company Physical Activities
                </Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="priorCompanyPhysicalActivities"
                  id="priorCompanyPhysicalActivities"
                  placeholder="Enter prior company physical activities"
                  value={priorCompanyPhysicalActivities}
                  onChange={(e) =>
                    setPriorCompanyPhysicalActivities(e.target.value)
                  }
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

export default PriorWorkHistory;
