import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MenuComponent from "./MenuComponent";
import axios from "axios";

const Home = () => {
  const [api, setApi] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get(
        "https://648cb01b8620b8bae7ed41a9.mockapi.io/product"
      );
      setApi(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(api);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container>
      <MenuComponent />
      <Row>
        {api.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card
              style={{
                width: "18rem",
                height: "20rem",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <Card.Img variant="top" src={item.avatar} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
