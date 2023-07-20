import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import data from './products.json'
import Product from './Product'

const ProductList = () => {
  return (
    <Container>
        <Row>
            {
                data.map(product => (
                    <Col key={product.id} className='mt-5'>
                        <Product product={product} />
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default ProductList