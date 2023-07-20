import React from "react";
import "./cards.scss";
import StudentCard from "./StudentCard";
import { Col, Row } from "react-bootstrap";
import students from "../../assets/data/students.json";

const Cards = () => {
  return (
    <div>
      <Row>
        {students.map((student, index) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <StudentCard student={student} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
