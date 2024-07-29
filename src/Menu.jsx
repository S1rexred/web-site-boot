import React from 'react'
import Slider from './Components/Slider';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import deserts1 from './deserts1.jpg';
import dreenk from './dreenk.jpg';
import hot from './hot.jpg';
import Jumbotron from './Components/Jumbotron';

const appetizersImages = [
    "https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143550&authkey=%21ANmcpKegI33d6JI&width=1200&height=800",
    "https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143551&authkey=%21ADESdIutKD5O3ug&width=1936&height=1296",
    'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143552&authkey=%21AOLlApDh9TtLMLQ&width=1000&height=666',
    'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143549&authkey=%21AOcfIrBzFiFbz6Q&width=900&height=600'
];

const appetizersTitles = [
    'Капоната',
    'Антипасто',
    'Карпачо',
    'Грисни',
];

const appetizersTexts = [
    'Описание для карточки 1. Это пример текста.',
    'Описание для карточки 2. Это другой пример текста.',
    'Описание для карточки 3. Текст для третьей карточки.',
    'Описание для карточки 4. Последний пример текста.',
];

const pizzaImages = [
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143562&authkey=%21ABc8pGmcVjc2l9E&width=5616&height=3744', 
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143559&authkey=%21AIdNMClmE2fndHo&width=1200&height=799',
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143569&authkey=%21AFdmGzZDIuncrzE&width=800&height=533', 
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143568&authkey=%21AGfLS9ATXv-1M2g&width=1680&height=1115', 
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143564&authkey=%21AJKENL2AqylbaAw&width=1200&height=800', 
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143563&authkey=%21AMCqj8IAYcgE53Y&width=1920&height=1282', 
];

const pizzaTitles = [
  'Пульезе',
  'Неополитанская',
  'Маринара',
  'Маргарита',
  '4 сыра',
  '4 сезона',
];

const pizzaTexts = [
  'Описание блюда 1',
  'Описание блюда 2',
  'Описание блюда 2',
  'Описание блюда 2',
  'Описание блюда 2',
  'Описание блюда 2',
];
const desertImages = [
   
];

const desertTitles = [
  
];

const desertTexts = [
  
];

export const Menu = () => (
    <>
    <h1 className='text-center'>Аппетайзеры</h1>
        <div className="menu-blog">
            <Row style={{margin: '2px 2px'}}>
                {appetizersImages.map((image, index) => (
                    <Col key={index} xs={6} sm={6} md={4} lg={3}>
                        <Card className='card'>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{appetizersTitles[index]}</Card.Title> 
                                <Card.Text>
                                    {appetizersTexts[index]} 
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

    <h1 className='text-center mt-5'>Пицца</h1>
    <div className="menu-blog">
        <Row style={{margin: '2px 2px'}}>
            {pizzaImages.map((image, index) => (
                <Col key={index} xs={6} sm={6} md={4} lg={3}>
                    <Card className='card'>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{pizzaTitles[index]}</Card.Title> 
                            <Card.Text>
                                {pizzaTexts[index]} 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
    
    <h1 className='text-center mt-5'>Десерты</h1> 
    <div className="menu-blog">
        <Row style={{margin: '2px 2px'}}>
            {desertImages.map((image, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card className='card'>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{desertTitles[index]}</Card.Title> 
                            <Card.Text>
                                {desertTexts[index]} 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>

    </>
);

export default Menu;