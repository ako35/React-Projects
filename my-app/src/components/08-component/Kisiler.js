import React from "react";
import student from "../../assets/data/students.json";
import Kisi from "./Kisi";
import { Col, Container, Row } from "react-bootstrap";

const Kisiler = () => {
  return (
    <Container>
      <Row>
          {student.map((student, index) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={2} className="tbl-std">
                <Kisi key={index} student={student} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Kisiler;
