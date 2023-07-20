import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const StudentCard = (props) => {
  return (
    <Container>
      <Card className="cards">
        <Card.Img variant="top" src={props.student.img} height={"200px"}/>
        <Card.Body>
          <Card.Title>{props.student.isim}</Card.Title>
          <Card.Text>{props.student.yas}</Card.Text>
          <Card.Text>{props.student.kurs}</Card.Text>
          <Button>Go Somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StudentCard;
