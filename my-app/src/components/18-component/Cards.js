import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.avatar} />
      <Card.Body>
        <Card.Title>{props.id}</Card.Title>
        <Card.Title>{props.productName}</Card.Title>
        <Card.Text>{props.createdAt}</Card.Text>
        <Card.Subtitle>{props.price}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default Cards