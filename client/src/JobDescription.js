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

const JobDescription = () => {
  const [appJobTitle, setAppJobTitle] = useState("");
  const [appCompany, setAppCompany] = useState("");
  const [appEmploymentDateBegin, setAppEmploymentDateBegin] = useState("");
  const [appEmploymentDateEnd, setAppEmploymentDateEnd] = useState("");
  const [doesApplicantWork, setDoesApplicantWork] = useState(false);
  const [workHoursPerDay, setWorkHoursPerDay] = useState("");
  const [workHoursPerWeek, setWorkHoursPerWeek] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [toolsAndBodyParts, setToolsAndBodyParts] = useState("");
  const [appExposure, setAppExposure] = useState("");
  const [appPhysicalJobActivities, setAppPhysicalJobActivities] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Job Description{" "}
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
                <Label for="appJobTitle">Applicant Job Title</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appJobTitle"
                  id="appJobTitle"
                  placeholder="Enter applicant job title"
                  value={appJobTitle}
                  onChange={(e) => setAppJobTitle(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appCompany">Applicant Company</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="appCompany"
                  id="appCompany"
                  placeholder="Enter applicant company"
                  value={appCompany}
                  onChange={(e) => setAppCompany(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appEmploymentDateBegin">
                  Applicant Employment Date Begin
                </Label>
                <Input
                  className="form-control mb-3"
                  type="date"
                  name="appEmploymentDateBegin"
                  id="appEmploymentDateBegin"
                  placeholder="Enter applicant employment date begin"
                  value={appEmploymentDateBegin}
                  onChange={(e) => setAppEmploymentDateBegin(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appEmploymentDateEnd">
                  Applicant Employment Date End
                </Label>
                <Input
                  className="form-control mb-3"
                  type="date"
                  name="appEmploymentDateEnd"
                  id="appEmploymentDateEnd"
                  placeholder="Enter applicant employment date end"
                  value={appEmploymentDateEnd}
                  onChange={(e) => setAppEmploymentDateEnd(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="doesApplicantWork">
                  Does the applicant still work?
                </Label>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="doesApplicantWork"
                      value="true"
                      checked={doesApplicantWork}
                      onChange={(e) => setDoesApplicantWork(true)}
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="doesApplicantWork"
                      value="false"
                      checked={!doesApplicantWork}
                      onChange={(e) => setDoesApplicantWork(false)}
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="workHoursPerDay">Work Hours Per Day</Label>
                <Input
                  className="form-control mb-3"
                  type="number"
                  name="workHoursPerDay"
                  id="workHoursPerDay"
                  placeholder="Enter work hours per day"
                  value={workHoursPerDay}
                  onChange={(e) => setWorkHoursPerDay(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="workHoursPerWeek">Work Hours Per Week</Label>
                <Input
                  className="form-control mb-3"
                  type="number"
                  name="workHoursPerWeek"
                  id="workHoursPerWeek"
                  placeholder="Enter work hours per week"
                  value={workHoursPerWeek}
                  onChange={(e) => setWorkHoursPerWeek(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="jobDescription">Job Description</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="jobDescription"
                  id="jobDescription"
                  placeholder="Enter job description"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="toolsAndBodyParts">
                  Tools and Body Parts to Perform Job
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="toolsAndBodyParts"
                  id="toolsAndBodyParts"
                  placeholder="Enter tools and body parts to perform job"
                  value={toolsAndBodyParts}
                  onChange={(e) => setToolsAndBodyParts(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appExposure">Applicant Exposure</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="appExposure"
                  id="appExposure"
                  placeholder="Enter applicant exposure"
                  value={appExposure}
                  onChange={(e) => setAppExposure(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="appPhysicalJobActivities">
                  Applicant Physical Job Activities
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="appPhysicalJobActivities"
                  id="appPhysicalJobActivities"
                  placeholder="Enter applicant physical job activities"
                  value={appPhysicalJobActivities}
                  onChange={(e) => setAppPhysicalJobActivities(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobDescription;
