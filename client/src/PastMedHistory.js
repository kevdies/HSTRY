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

const PastMedHistory = () => {
  const [pastMedHistory, setPastMedHistory] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Past Medical History{" "}
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
                <Label for="pastMedHistory">Past Medical History</Label>
                <Input
                  className="form-control mb-3"
                  type="textarea"
                  name="pastMedHistory"
                  id="pastMedHistory"
                  placeholder="Enter past medical history"
                  value={pastMedHistory}
                  onChange={(e) => setPastMedHistory(e.target.value)}
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

export default PastMedHistory;