import React from 'react'
import Slider from './Components/Slider';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import deserts1 from './deserts1.jpg';
import dreenk from './dreenk.jpg';
import hot from './hot.jpg';
import Jumbotron from './Components/Jumbotron';

const appetizersImages = [
    "https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143598&authkey=%21AEPT50sjguhurcw&width=1200&height=800",
    "https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143600&authkey=%21AA4ViWZ6tZtsG4c&width=1936&height=1296",
    'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143596&authkey=%21AGPBUtQWnM1nXFI&width=1000&height=666',
    'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143592&authkey=%21AG1Hk_IDcNmgq5k&width=900&height=600'
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

const altAppetizersTexts = [
    'Изображение капонаты',
    'Изображение антипасто',
    'Изображение карпачо',
    'Изображение грисни',
];

const pizzaImages = [
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143594&authkey=%21AMprDxbxYahntcQ&width=5616&height=3744', 
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143593&authkey=%21AHUctXyB5spf-T4&width=1200&height=799',
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143595&authkey=%21AJd8wm21EaqEhMk&width=800&height=533', 
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143597&authkey=%21ALz9fm97gDorxKc&width=1680&height=1115', 
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143599&authkey=%21AKkFgYs9KLTkafI&width=1200&height=800', 
  'https://onedrive.live.com/embed?resid=66971F1843B95B1D%2143591&authkey=%21AAxsRBB2QHcmv9k&width=1920&height=1282', 
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

const altPizzaTexts = [
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

const altDesertTexts = [
  
];

export const Menu = () => (
    <>
    <h1 className='text-center'>Аппетайзеры</h1>
        <div className="menu-blog">
            <Row style={{margin: '2px 2px'}}>
                {appetizersImages.map((image, index) => (
                    <Col key={index} xs={6} sm={6} md={4} lg={3}>
                        <Card className='card'>
                            <Card.Img variant="top" src={image} alt={altAppetizersTexts[index]} />
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
                        <Card.Img variant="top" src={image} alt={altPizzaTexts[index]} />
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
                        <Card.Img variant="top" src={image} alt={altDesertTexts[index]} />
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