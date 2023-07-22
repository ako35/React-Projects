import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Tour = (props) => {
  const [more, setMore] = useState(false);

  return (
    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.price}</Card.Subtitle>
        <Card.Text>
          {more ? `${props.info}` : `${props.info.substring(0, 100)}`}{" "}
          <button onClick={() => setMore((prev) => !prev)}>
            {more ? `<` : `>`}
          </button>
        </Card.Text>
        <Button variant="danger" onClick={() => props.deleteById(props.id)}>
          Not Interested
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Tour;
