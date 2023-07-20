import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const RandomImage = () => {
  const [randomNum, setRandomNum] = useState(1);

    const handleChange = () =>{
      let random = Math.floor(Math.random() * 4);
      if (random === 0) {
        random = 1;
      }
      setRandomNum(random);
    }

  return (
    <div>
      <Card
        style={{ width: "18rem", textAlign: "center", margin: "5rem auto" }}
      >
        <Card.Img
          variant="top"
          src={require(`../../assets/img/arka${randomNum}.jpg`)}
          height={"200px"}
        />
        <Card.Body>
          <Card.Title>{randomNum}</Card.Title>
          <Button variant="primary" onClick={handleChange}>Change Picture</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RandomImage;
