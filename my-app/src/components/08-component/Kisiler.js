import React from "react";
import student from "../../assets/data/students.json";
import Kisi from "./Kisi";
import { Col, Row } from "react-bootstrap";

const Kisiler = () => {
  return (
    <div>
      <Row>
          {student.map((student, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="tbl-std">
                <Kisi student={student} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Kisiler;
