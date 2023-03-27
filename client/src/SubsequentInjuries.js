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

const SubsequentInjuries = () => {
  const [subsequentInjuries, setSubsequentInjuries] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className="container-form">
        <Row>
          <Col>
            <h3>
              Subsequent Injuries{" "}
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
                <Label for="subsequentInjuries">Subsequent Injuries</Label>
                <Input
                  className="form-control mb-3"
                  type="text"
                  name="subsequentInjuries"
                  id="subsequentInjuries"
                  placeholder="Enter subsequent injuries"
                  value={subsequentInjuries}
                  onChange={(e) => setSubsequentInjuries(e.target.value)}
                />
              </FormGroup>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubsequentInjuries;
