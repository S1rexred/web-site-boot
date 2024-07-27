import React from 'react'
import Slider from './Components/Slider';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import deserts1 from './deserts1.jpg';
import dreenk from './dreenk.jpg';
import hot from './hot.jpg';
import Jumbotron from './Components/Jumbotron';

const images = [
    'https://via.placeholder.com/100x180?text=Image+1',
    'https://via.placeholder.com/100x180?text=Image+2',
    'https://via.placeholder.com/100x180?text=Image+3',
    'https://via.placeholder.com/100x180?text=Image+4',
];


const titles = [
    'Заголовок карточки 1',
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
                            <Card.Img variant="top" src={image} />
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