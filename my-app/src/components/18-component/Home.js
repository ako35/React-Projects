import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Cards from "./Cards";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://648cb01b8620b8bae7ed41a9.mockapi.io/product"
      );
      const data = response.data;
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
        {loading && <Spinner animation="border" variant="danger"/>}
        <Row>
            {data.map(item => (
                <Col key={item.id} className='mt-5' sm={6} md={4} lg={3} xl={2}>
                    <Cards {...item} />
                </Col>
            ))}
        </Row>
    </Container>
  );
};

export default Home;
