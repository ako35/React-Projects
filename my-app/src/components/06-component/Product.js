import React from 'react'
import fruits from './Fruits'
import { Col, Container, Row } from 'react-bootstrap'


const Product = () => {
    const listFruits = fruits.filter(fruit => fruit.isFruit).map((fruit) => (
        <li key={fruit.id}>{fruit.title}</li>
    ))

    const listNotFruits = fruits.filter(fruit => !fruit.isFruit).map((fruit) => (
        <li key={fruit.id}>{fruit.title}</li>
    ))

  return (
    <Container>
      <h1>Product</h1>
      <Row>
        <Col>
            <h2>Meyve Olanlar</h2>
            <ul>{listFruits}</ul>
        </Col>
        <Col>
            <h2>Sebze Olanlar</h2>
            <ul>{listNotFruits}</ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Product