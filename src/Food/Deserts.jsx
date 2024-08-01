import React, { useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';

const desertsImages = [
    "https://avatars.mds.yandex.net/i?id=65be8287d799c145e27b1075d0327d1e-4469558-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=ba337910e353141c173489b8210378ba_l-9241287-images-thumbs&n=13",
    'https://avatars.mds.yandex.net/i?id=3c50900766bceac4328cfd39e3d50e9f_l-10576882-images-thumbs&n=13',
    'https://fotogranat.ru/wp-content/uploads/2023/12/tsukotto-7-1.webp'
];

const desertsTitles = [
    'Пастичотто',
    'Пандро',
    'Панна-котта',
    'Дзукотто',
];

const desertsTexts = [
    'Описание для карточки 1. Это пример текста.',
    'Описание для карточки 2. Это другой пример текста.',
    'Описание для карточки 3. Текст для третьей карточки.',
    'Описание для карточки 4. Последний пример текста.',
];

const altdesertsTexts = [
    'Изображение капонаты',
    'Изображение антипасто',
    'Изображение карпачо',
    'Изображение грисни',
];

export const Deserts = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentDish, setCurrentDish] = useState({ title: '', text: '' });

    const handleShow = (title, text) => {
        setCurrentDish({ title, text });
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
            <h1 className='text-center'>Десерты</h1>
            <div className="menu-blog">
                <Row style={{ margin: '2px 2px' }}>
                    {desertsImages.map((image, index) => (
                        <Col key={index} xs={6} sm={6} md={4} lg={3}>
                            <Card className='card'>
                                <Card.Img variant="top" src={image} alt={altdesertsTexts[index]} />
                                <Card.Body>
                                    <Card.Title>{desertsTitles[index]}</Card.Title>
                                    {/* Убрали Card.Text для отображения текста под картинкой */}
                                    {/* Добавляем элемент для отображения "описания" */}
                                    <div style={{ cursor: 'pointer', color: 'dark', textDecoration: 'underline' }} onClick={() => handleShow(desertsTitles[index], desertsTexts[index])}>
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
