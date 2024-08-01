import React, { useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';

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