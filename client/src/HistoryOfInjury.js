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

const HistoryOfInjury = () => {
  const [historyOfInjury, setHistoryOfInjury] = useState("");

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
                <Label for="historyOfInjury">History of Injury</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="historyOfInjury"
                  id="historyOfInjury"
                  placeholder="Enter history of injury"
                  value={historyOfInjury}
                  onChange={(e) => setHistoryOfInjury(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default HistoryOfInjury;
