import React, { useState } from 'react';
import { Card, Col, Row, Button, Modal } from 'react-bootstrap';

const DreenksImages = [
    "https://wolokom.ru/public/6ltransq71e85.jpg",
    "https://avatars.mds.yandex.net/i?id=8d6f6699ce12eab58a0429065f072414f7babdb322ddf891-5222505-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=03e02dce3dea615961681e646687c81e_l-5233487-images-thumbs&n=13",
    'https://avatars.mds.yandex.net/i?id=948d8479727f210ba40954e6217473b1_l-5192496-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=0aa735ed37c72e5033bf69a3bb1f9115_l-10813963-images-thumbs&n=13',
    'https://avatars.dzeninfra.ru/get-zen_doc/5210101/pub_63d775e06ef29b4236080ed5_63d77617ecb576593c30be16/scale_1200',
    'https://avatars.dzeninfra.ru/get-zen_doc/3753737/pub_60827c16ff8fff5a6477aad6_60827ebc223e2e73a74df02d/scale_1200',
];

const DreenksTitles = [
    'Амаретто',
    'Лимонад тиффани',
    'Лимонады (фруктовый, лайм, апельсин)',
    'Граппа',
    'Вода',
    'Капучино',
    'Раф',
];

const DreenksTexts = [
    ' Описание: Итальянский сладкий ликер с миндальным вкусом, часто используется в коктейлях или как дижестив.\nСостав: Миндаль (или абрикосовые косточки), сахар, спирт, вода, экстракты и ароматизаторы.',
    ' - Описание: Освежающий лимонад с легким цветочным ароматом, обычно подается со льдом и свежими фруктами. Состав:  Свежевыжатый лимонный сок, сахарный сироп, газированная вода, мята, цветы (например, лаванда или роза) для аромата.',
    'Описание: Разнообразные фруктовые лимонады, которые дарят освежающий вкус и аромат. Идеальны для жарких дней.Состав: Вода, свежевыжатый сок (фрукты по выбору: лимон, лайм или апельсин), сахар и лед. Могут содержать дополнительные фрукты для украшения.',
    'Описание: Итальянский крепкий алкогольный напиток, производимый из виноградных выжимок. Обладает ярким вкусом и ароматом. Состав: Виноградные выжимки (остатки после производства вина), вода и иногда добавляются травы или специи для разнообразия вкуса.',
    'Описание: Основной напиток для утоления жажды, необходимый для поддержания гидратации организма.Состав: Чистая вода, может быть газированной или негазированной. Иногда обогащается минералами или ароматизируется.',
    'Описание: Итальянский кофейный напиток, состоящий из равных частей эспрессо, горячего молока и молочной пены. Идеален для утреннего кофе или послеобеденного перекуса.Состав: Эспрессо, горячее молоко, молочная пена. Часто посыпается корицей или какао-порошком для аромата.',
    'Описание: Нежный кофейный напиток с добавлением взбитых сливок и ванили, обладающий сладким и кремовым вкусом.Состав: Эспрессо, сливки, сахар и ванильный экстракт. Подается с молочной пеной или взбитыми сливками сверху.'
];

const altDreenksTexts = [
    'Амаретто',
    'Лимонад тиффани',
    'Лимонады (фруктовый, лайм, апельсин)',
    'Граппа',
    'Вода',
    'Капучино',
    'Раф',
];

export const Dreenks = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentDish, setCurrentDish] = useState({ title: '', text: '' });

    const handleShow = (title, text) => {
        setCurrentDish({ title, text });
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <>
            <h1 className='text-center'>Напитки</h1>
            <div className="menu-blog">
                <Row style={{ margin: '2px 2px' }}>
                    {DreenksImages.map((image, index) => (
                        <Col key={index} xs={6} sm={6} md={4} lg={3}>
                            <Card className='card'>
                                <Card.Img variant="top" src={image} alt={altDreenksTexts[index]} />
                                <Card.Body>
                                    <Card.Title>{DreenksTitles[index]}</Card.Title>
                                    {/* Убрали Card.Text для отображения текста под картинкой */}
                                    {/* Добавляем элемент для отображения "описания" */}
                                    <div style={{ cursor: 'pointer', color: 'dark', textDecoration: 'underline' }} onClick={() => handleShow(DreenksTitles[index], DreenksTexts[index])}>
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
