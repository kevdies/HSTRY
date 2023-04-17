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

const HistoryOfInjury = () => {
  const [atTimeOfInjury, setAtTimeOfInjury] = useState("");
  const [witnessedBy, setWitnessedBy] = useState("");
  const [reportedTo, setReportedTo] = useState("");
  const [offeredTreatment, setOfferedTreatment] = useState("");
  const [initialDoctor, setInitialDoctor] = useState("");
  const [initialClinic, setInitialClinic] = useState("");
  const [initialDateSeen, setInitialDateSeen] = useState("");
  const [initialImaging, setInitialImaging] = useState("");
  const [initialMeds, setInitialMeds] = useState("");
  const [initialTreatment, setInitialTreatment] = useState("");
  const [initialRestrictions, setInitialRestrictions] = useState("");
  const [followUpAppointment, setFollowUpAppointment] = useState("");
  const [followUpDoctor, setFollowUpDoctor] = useState("");
  const [followUpMeds, setFollowUpMeds] = useState("");
  const [followUpTreatment, setFollowUpTreatment] = useState("");
  const [symptomRelief, setSymptomRelief] = useState("");
  const [surgeries, setSurgeries] = useState("");
  const [currentDoctor, setCurrentDoctor] = useState("");
  const [currentTreatmentPlans, setCurrentTreatmentPlans] = useState("");
    const [
      ongoingRestrictionsPrescribedBy,
      setOngoingRestrictionsPrescribedBy,
    ] = useState("");




  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              History of Injury{" "}
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
                <Label for="timeOfInjury">
                  What Happened at Time of Injury
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="atTimeOfInjury"
                  id="atTimeOfInjury"
                  placeholder="get as much information as possible about how the injury occurred"
                  value={atTimeOfInjury}
                  onChange={(e) => setAtTimeOfInjury(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="witnessedBy">Witnessed By</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="witnessedBy"
                  id="witnessedBy"
                  placeholder="Enter who witnessed the injury"
                  value={witnessedBy}
                  onChange={(e) => setWitnessedBy(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="reportedTo">Reported To</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="reportedTo"
                  id="reportedTo"
                  placeholder="Enter who the injury was reported to"
                  value={reportedTo}
                  onChange={(e) => setReportedTo(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="offeredTreatment">Offered Treatment</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="offeredTreatment"
                  id="offeredTreatment"
                  placeholder="enter 'the applicant was offered treatment by...' or 'the applicant was not offered treatment'"
                  value={offeredTreatment}
                  onChange={(e) => setOfferedTreatment(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="initialDoctor">Initial Doctor</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="initialDoctor"
                  id="initialDoctor"
                  placeholder="Enter the name of the initial doctor seen"
                  value={initialDoctor}
                  onChange={(e) => setInitialDoctor(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="initialClinic">Initial Clinic</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="initialClinic"
                  id="initialClinic"
                  placeholder="Enter the name of the initial clinic seen"
                  value={initialClinic}
                  onChange={(e) => setInitialClinic(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="initialDateSeen">Initial Date Seen</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="initialDateSeen"
                  id="initialDateSeen"
                  placeholder="Enter the date of the initial appointment"
                  value={initialDateSeen}
                  onChange={(e) => setInitialDateSeen(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="initialImaging">Initial Exams/Imaging</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="initialImaging"
                  id="initialImaging"
                  placeholder="Enter any initial exams or imaging taken"
                  value={initialImaging}
                  onChange={(e) => setInitialImaging(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="initialMeds">
                  Initial Prescriptions/Medications
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="initialMeds"
                  id="initialMeds"
                  placeholder="Enter any initial prescriptions or medications taken"
                  value={initialMeds}
                  onChange={(e) => setInitialMeds(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="initialTreatment">Initial Treatment</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="initialTreatment"
                  id="initialTreatment"
                  placeholder="Enter the initial treatment received"
                  value={initialTreatment}
                  onChange={(e) => setInitialTreatment(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="initialRestrictions">Initial Restrictions</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="initialRestrictions"
                  id="initialRestrictions"
                  placeholder="Enter any initial restrictions given"
                  value={initialRestrictions}
                  onChange={(e) => setInitialRestrictions(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="followUpAppointment">Follow-up Appointment</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="followUpAppointment"
                  id="followUpAppointment"
                  placeholder="Enter any information regarding a follow up appointment or state 'no follow up appointment was given by initial doctor'"
                  value={followUpAppointment}
                  onChange={(e) => setFollowUpAppointment(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="followUpDoctor">Follow-up Doctor</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="followUpDoctor"
                  id="followUpDoctor"
                  placeholder="Enter the name of the follow-up doctor"
                  value={followUpDoctor}
                  onChange={(e) => setFollowUpDoctor(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="custom-form-group">
                <Label for="followUpTreatment">Follow-up Treatment</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="followUpTreatment"
                  id="followUpTreatment"
                  placeholder="Enter any follow-up treatment received"
                  value={followUpTreatment}
                  onChange={(e) => setFollowUpTreatment(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="followUpMeds">
                  Follow-up Prescriptions/Medications
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="followUpMeds"
                  id="followUpMeds"
                  placeholder="Enter any follow-up prescriptions or medications taken"
                  value={followUpMeds}
                  onChange={(e) => setFollowUpMeds(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="symptomRelief">Symptom Relief</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="symptomRelief"
                  id="symptomRelief"
                  placeholder="Enter if anything provided relief"
                  value={symptomRelief}
                  onChange={(e) => setSymptomRelief(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="surgeries">Surgeries</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="surgeries"
                  id="surgeries"
                  placeholder="Enter any surgeries undergone and doctors"
                  value={surgeries}
                  onChange={(e) => setSurgeries(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="ongoingRestrictionsPrescribedBy">
                  Ongoing Restrictions Prescribed By
                </Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="ongoingRestrictionsPrescribedBy"
                  id="ongoingRestrictionsPrescribedBy"
                  placeholder="Enter the name of the physician who prescribed ongoing restrictions and what the restrictions are"
                  value={ongoingRestrictionsPrescribedBy}
                  onChange={(e) =>
                    setOngoingRestrictionsPrescribedBy(e.target.value)
                  }
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="currentDoctor">Current Doctor</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="currentDoctor"
                  id="currentDoctor"
                  placeholder="Enter the name of your current doctor"
                  value={currentDoctor}
                  onChange={(e) => setCurrentDoctor(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="currentTreatmentPlans">
                  Current Treatment Plans
                </Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="currentTreatmentPlans"
                  id="currentTreatmentPlans"
                  placeholder="Enter any current treatment plans"
                  value={currentTreatmentPlans}
                  onChange={(e) => setCurrentTreatmentPlans(e.target.value)}
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

export default HistoryOfInjury;
