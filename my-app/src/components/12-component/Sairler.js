import React, { useState } from 'react'
import data from './data'
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap'

const Sairler = () => {
    const [index, setIndex] = useState(0)

    const next = () => {
        if (index === data.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(data.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const random = () => {
        setIndex(Math.floor(Math.random() * data.length))
    }

  return (
    <Container>
        <Card style={{ width: '18rem', height: '500px' }}>
            <Card.Img variant="top" src={data[index].resim} height={"200px"}/>
            <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title className='p-2'>{index + 1}</Card.Title>
                <Card.Text className='p-2'>
                    {data[index].isim}
                </Card.Text>
                <Card.Subtitle className='p-2'>{data[index].metin}</Card.Subtitle>
                
            </Card.Body>
            <ButtonGroup className='p-2' style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <Button variant='danger' onClick={() => prev()}>Prev</Button>
                    <Button variant='warning' onClick={() => random()}>Random</Button>
                    <Button variant='success' onClick={() => next()}>Next</Button>
                </ButtonGroup>
        </Card>
    </Container>
  )
}

export default Sairler