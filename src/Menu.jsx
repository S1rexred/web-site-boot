import React from 'react'
import Slider from './Components/Slider';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import deserts1 from './deserts1.jpg';
import dreenk from './dreenk.jpg';
import hot from './hot.jpg';
import Jumbotron from './Components/Jumbotron';

const images = [
    "http://tamasi.ru/d/lapsha_s_ovoshchami.jpg",
    'https://i.pinimg.com/originals/63/12/20/631220700a0db53107c5d5f29b3a734d.jpg',
    'https://via.placeholder.com/100x180?text=Image+3',
    'https://via.placeholder.com/100x180?text=Image+4',
];


const titles = [
    'Антипасто',
    'Заголовок карточки 2',
    'Заголовок карточки 3',
    'Заголовок карточки 4',
];


const texts = [
    'Описание для карточки 1. Это пример текста.',
    'Описание для карточки 2. Это другой пример текста.',
    'Описание для карточки 3. Текст для третьей карточки.',
    'Описание для карточки 4. Последний пример текста.',
];

export const Menu = () => (
    <>
    <h1 className='text-center'>Меню</h1>
        <div className="menu-blog">
            <Row style={{margin: '2px 2px'}}>
                {images.map((image, index) => (
                    <Col key={index} xs={6} sm={6} md={6} lg={3}>
                        <Card style={{width: '16rem'}} className='card'>
                            <Card.Img style={{ width: "21rem"}} variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{titles[index]}</Card.Title> {/* Используем заголовок из массива */}
                                <Card.Text>
                                    {texts[index]} {/* Используем текст из массива */}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </>
);