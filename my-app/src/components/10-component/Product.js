import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = (props) => {
    const addToCard = () => {
        console.log('add to card')
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`./img/${props.product.image}`)} height={"200px"}/>
      <Card.Body className='text-center d-flex flex-column justify-content-center'>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Subtitle>{props.product.desc}</Card.Subtitle>
        <Card.Text>{props.product.price}</Card.Text>
        <Button variant='primary' onClick={addToCard}>Buy Now</Button>
      </Card.Body>
    </Card>
  )
}

export default Product