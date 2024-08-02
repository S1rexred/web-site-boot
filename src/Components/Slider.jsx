import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import cafe1 from '../cafe1.jpg';
import cafe2 from '../cafe2.jpg';
import cafe3 from '../cafe3.jpg';
import handleShowBron from './Navibar'

export default function NaviBar() {
  return (
    <Carousel>
        <Carousel.Item style={{'height': '500px' }}>
            <img
                className='d-block w-100'
                src={cafe1}
                alt='Кафе'
            />
            <Carousel.Caption>
            <Button onClick={() => handleShowBron(true)} className='button-bron' variant='primary'>Забронировать столик</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px' }}>
            <img
                className='d-block w-100'
                src={cafe2}
                alt='Кафе'
            />
            <Carousel.Caption>
            <Button className='button-bron' variant='primary'>Забронировать столик</Button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px' }}>
            <img
                className='d-block w-100'
                src={cafe3}
                alt='Кафе'
            />
            <Carousel.Caption>
            <Button className='button-bron' variant='primary'>Забронировать столик</Button>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)
}