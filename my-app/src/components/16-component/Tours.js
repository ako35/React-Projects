import React, { useEffect, useState } from 'react'
import data from './data.json'
import Tour from './Tour'
import { Container } from 'react-bootstrap'

const Tours = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            setTours(data)
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    const deleteById = (id) =>{
      setTours(tours.filter((tour) => tour.id !== id))
    }

  return (
    <Container className='header'>
      <h2 className='text-center mt-4'>Our Tours</h2>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} deleteById={deleteById} />
        ))}
      </div>
    </Container>
  )
}

export default Tours