import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Akis = () => {
  return (
    <Container>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../assets/img/arka1.jpg`)}
            alt="First slide"
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../assets/img/arka2.jpg`)}
            alt="Second slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../assets/img/arka3.jpg`)}
            alt="Third slide"
            style={{ height: "500px" }}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Akis;
