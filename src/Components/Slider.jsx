import React from 'react'
import { Carousel } from 'react-bootstrap'
import cafe1 from '../cafe1.jpg';
import cafe2 from '../cafe2.jpg';
import cafe3 from '../cafe3.jpg';

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
            <h3>Самое лучшее кафе во всем мире</h3>
            <p>Приходи, первый раз - скидка</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px' }}>
            <img
                className='d-block w-100'
                src={cafe2}
                alt='Кафе'
            />
            <Carousel.Caption>
            <h3 className="text-dark">Самое лучшее кафе во всем мире</h3>
            <p className="text-dark">Приходи, первый раз - скидка</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px' }}>
            <img
                className='d-block w-100'
                src={cafe3}
                alt='Кафе'
            />
            <Carousel.Caption>
            <h3>Самое лучшее кафе во всем мире</h3>
            <p>Приходи, первый раз - скидка</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)
}