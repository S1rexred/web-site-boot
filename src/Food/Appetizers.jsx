import React, { useState } from 'react';
import { Card, Col, Container, Row, Button, Modal } from 'react-bootstrap';

const appetizersImages = [
    "https://avatars.mds.yandex.net/i?id=b5ebf66fc91e2bee21e664981dbcdd54_l-8411661-images-thumbs&n=13",
    "https://i.pinimg.com/originals/63/12/20/631220700a0db53107c5d5f29b3a734d.jpg",
    'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65a778ccd19d5f4bb543a76c_65a77931f6197c435a462121/scale_1200',
    'https://avatars.mds.yandex.net/i?id=2ca67e61d5fa87869665ef6a03743925_l-5207283-images-thumbs&n=13'
];

const appetizersTitles = [
    'Капоната',
    'Антипасто',
    'Карпачо',
    'Гриссини',
];

const appetizersTexts = [
    '  Капоната — это традиционное сицилийское блюдо, состоящее из тушеных баклажанов, помидоров, сельдерея, оливок и каперсов. Оно готовится на оливковом масле с добавлением уксуса и сахара, что придает ему уникальный сладко-кислый вкус. Подается как холодная закуска или гарнир.',
    'Антипасто — это разнообразная тарелка закусок, которая может включать в себя сыры (например, моцареллу или пармезан), мясные деликатесы (прошутто, салями), маринованные овощи, оливки и артишоки. Это идеальное начало трапезы, позволяющее насладиться богатством итальянских вкусов..',
    'Карпачо — это тонко нарезанные ломтики сырого мяса (чаще всего говядины) или рыбы (например, тунца), которые подаются с оливковым маслом, лимонным соком и щепоткой соли. Часто блюдо украшается пармезаном и свежей руколой, создавая легкое и изысканное угощение.',
    'Гриссини — это длинные хрустящие хлебные палочки, часто посыпанные кунжутом или пряностями. Их можно подавать как самостоятельную закуску или с различными соусами, такими как песто или оливковое масло. Они идеально подходят для аперитива и отлично дополняют любую трапезу',
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
