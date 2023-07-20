import React from "react";
import { Card, Container } from "react-bootstrap";
import './kisi.scss';

const Kisi = (props) => {
  return (
    <Container className="kisi">
      <Card style={{ width: "200px" }}>
        <Card.Img
          variant="top"
          className="img-fluid"
          style={{ height: "200px" }}
          src={props.student.img}
        />
        <Card.Body>
          <Card.Title>{props.student.isim}</Card.Title>
          <Card.Text>{props.student.yas}</Card.Text>
          <Card.Text>{props.student.kurs}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Kisi;
