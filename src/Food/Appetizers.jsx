import React, { useState } from 'react';
import Slider from '../Components/Slider';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';
import Jumbotron from '../Components/Jumbotron';

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

export const Appetizers = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentDish, setCurrentDish] = useState({ title: '', text: '' });

    const handleShow = (title, text) => {
        setCurrentDish({ title, text });
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
            <h1 className='text-center'>Аппетайзеры</h1>
            <div className="menu-blog">
                <Row style={{ margin: '2px 2px' }}>
                    {appetizersImages.map((image, index) => (
                        <Col key={index} xs={6} sm={6} md={4} lg={3}>
                            <Card className='card'>
                                <Card.Img variant="top" src={image} alt={altAppetizersTexts[index]} />
                                <Card.Body>
                                    <Card.Title>{appetizersTitles[index]}</Card.Title>
                                    {/* Убрали Card.Text для отображения текста под картинкой */}
                                    {/* Добавляем элемент для отображения "описания" */}
                                    <div style={{ cursor: 'pointer', color: 'dark', textDecoration: 'underline' }} onClick={() => handleShow(appetizersTitles[index], appetizersTexts[index])}>
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
    );
};
