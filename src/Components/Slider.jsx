import React from 'react'
import { Carousel } from 'react-bootstrap'
import cafe1 from './images/cafe1.jpg'
import cafe2 from './images/cafe2.jpg'
import cafe3 from './images/cafe3.jpg';


export default function NaviBar() {
  return (
    <Carousel>
        <Carousel.Item className='carousel' style={{'height': '500px' }}>
            <img
                className='d-block w-100'
                src={cafe1}
                alt='Кафе'
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel' style={{'height': '500px' }}>
            <img
                className='d-block w-100'
                src={cafe2}
                alt='Кафе'
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel' style={{'height': '500px' }}>
            <img
                className='d-block w-100'
                src={cafe3}
                alt='Кафе'
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)
}