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

const CurrentComplaints = () => {
  const [bodyPart, setBodyPart] = useState("");
  const [goodDayPainLevel, setGoodDayPainLevel] = useState("");
  const [badDayPainLevel, setBadDayPainLevel] = useState("");
  const [painSensation, setPainSensation] = useState("");
  const [numbnessOrTingling, setNumbnessOrTingling] = useState("");
  const [painRadiating, setPainRadiating] = useState("");
  const [painWorsens, setPainWorsens] = useState("");
  const [painLessens, setPainLessens] = useState("");
  const [painLevelTiming, setPainLevelTiming] = useState("");
  const [painRemedies, setPainRemedies] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Current Complaints{" "}
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
                <Label for="body part">Body Part</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="bodyPart"
                  id="bodyPart"
                  placeholder="Enter body part"
                  value={bodyPart}
                  onChange={(e) => setBodyPart(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="goodDayPainLevel">Good Day Pain Level</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="goodDayPainLevel"
                  id="goodDayPainLevel"
                  placeholder="pain level on a good day"
                  value={goodDayPainLevel}
                  onChange={(e) => setGoodDayPainLevel(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="badDayPainLevel">Bad Day Pain Level</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="badDayPainLevel"
                  id="badDayPainLevel"
                  placeholder="pain level on a bad day"
                  value={badDayPainLevel}
                  onChange={(e) => setBadDayPainLevel(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="painSensation">Pain Sensation</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="painSensation"
                  id="painSensation"
                  placeholder="Enter your pain sensation"
                  value={painSensation}
                  onChange={(e) => setPainSensation(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="numbnessOrTingling">Numbness/Tingling</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="numbnessOrTingling"
                  id="numbnessOrTingling"
                  placeholder="Enter any numbness or tingling sensations"
                  value={numbnessOrTingling}
                  onChange={(e) => setNumbnessOrTingling(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="painRadiating">Pain Radiating</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="painRadiating"
                  id="painRadiating"
                  placeholder="Enter any pain radiating sensations"
                  value={painRadiating}
                  onChange={(e) => setPainRadiating(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="painWorsens">Pain Worsens</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="painWorsens"
                  id="painWorsens"
                  placeholder="Enter any situations in which pain worsens"
                  value={painWorsens}
                  onChange={(e) => setPainWorsens(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="painLessens">Pain Lessens</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="painLessens"
                  id="painLessens"
                  placeholder="Enter any situations in which pain lessens"
                  value={painLessens}
                  onChange={(e) => setPainLessens(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="painLevelTiming">Pain Level Timing</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="painLevelTiming"
                  id="painLevelTiming"
                  placeholder="Enter when its worse and when its better i.e. morning, evening, night"
                  value={painLevelTiming}
                  onChange={(e) => setPainLevelTiming(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="custom-form-group">
                <Label for="painRemedies">Pain Remedies</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="painRemedies"
                  id="painRemedies"
                  placeholder="Heat/ice/rest/exercises/electrical stimulation/massage/acupuncture/therapy/medications "
                  value={painRemedies}
                  onChange={(e) => setPainRemedies(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CurrentComplaints;
