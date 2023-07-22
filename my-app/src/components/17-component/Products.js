import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Products = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getProduct = () => {
            const timer = setTimeout(() => {
                fetch('https://648cb01b8620b8bae7ed41a9.mockapi.io/product')
                .then(res => res.json())
                .then(data => {
                    setProduct(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
            }, 3000);
    
            return () => {
                clearTimeout(timer)
            }
        };
        getProduct();
    }, [])

    
  return (
    <Container>
        {loading && <Spinner animation="border" variant="danger"/>}
        <Row>
            {product.map(product => (
                <Col key={product.id} className='mt-5' sm={6} md={4} lg={3} xl={2}>
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default Products