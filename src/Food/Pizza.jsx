import React, { useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';

const pizzaImages = [
    'https://photopole.ru/wp-content/uploads/italianskaia-pitstsa-10.webp', 
    'https://photopole.ru/wp-content/uploads/pitstsa-margarita-neapol-1.webp',
    'https://kda.ilpatio.ru/wa-data/public/shop/products/30/15/31530/images/10120144/10120144.900x616.jpg', 
    'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65a7cf3b6231712e3be9fae4_65a7cf78e720551faa53adf7/scale_1200', 
    'https://avatars.dzeninfra.ru/get-zen_doc/1888987/pub_6501ebbdffb3f010e7779bda_6501ebf3b9751c752d5a783a/scale_1200', 
    'https://avatars.mds.yandex.net/i?id=b711694e376f67986621038362bd2b92_l-8498056-images-thumbs&n=13', 
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
    'Пицца Пульезе отличается тонким тестом и свежими ингредиентами. Обычно она готовится с томатным соусом, моцареллой, базиликом и оливковым маслом. Это легкая и ароматная пицца, которая прекрасно подходит для теплого вечера.',
    'Неополитанская пицца считается классикой итальянской кухни. Ее тесто готовится вручную и выпекается в дровяной печи до золотистой корочки. Начинка состоит из томатного соуса, свежей моцареллы, базилика и оливкового масла, что создает насыщенный вкус и аромат.',
    'Пицца Маринара — это простое, но очень вкусное блюдо с томатным соусом, чесноком и орегано. Она не содержит сыра, что делает ее легкой и подходящей для вегетарианцев. Идеально подходит для любителей ярких вкусов.',
    'Пицца Маргарита — это символ итальянской кухни. Она готовится с томатным соусом, свежей моцареллой и базиликом. Яркие цвета ингредиентов отражают цвета итальянского флага и создают гармоничное сочетание вкусов',
    'Пицца 4 сыра — это настоящая находка для любителей сыра. В ней используются различные сорта сыра, такие как моцарелла, горгонзола, пармезан и рикотта. Это блюдо обладает насыщенным вкусом и кремовой текстурой.',
    'Пицца 4 сезона разделена на четыре части с разными начинками: артишоки, ветчина, грибы и оливки. Каждая часть представляет собой отдельный сезон года, что делает эту пиццу идеальным выбором для тех, кто хочет попробовать сразу несколько вкусов.',
  ];
  
  const altPizzaTexts = [
    'Пульезе',
    'Неополитанская',
    'Маринара',
    'Маргарита',
    '4 сыра',
    '4 сезона',
  ];

export const Pizza = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentDish, setCurrentDish] = useState({ title: '', text: '' });

    const handleShow = (title, text) => {
        setCurrentDish({ title, text });
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
        
        <h1 className='text-center mt-5'>Пицца</h1>
    <div className="menu-blog">
        <Row style={{margin: '2px 2px'}}>
            {pizzaImages.map((image, index) => (
                <Col key={index} xs={6} sm={6} md={4} lg={3}>
                    <Card className='card'>
                        <Card.Img variant="top" src={image} alt={altPizzaTexts[index]} />
                        <Card.Body>
                            <Card.Title>{pizzaTitles[index]}</Card.Title> 
                            <div style={{ cursor: 'pointer', color: 'dark', textDecoration: 'underline' }} onClick={() => handleShow(pizzaTitles[index], pizzaTexts[index])}>
                                        Описание
                                    </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>

    {/* Модальное окно для отображения описания блюда */}
    <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{currentDish.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{currentDish.text}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        
        
        </>
    )
} 