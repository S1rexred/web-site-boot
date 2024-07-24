import React from 'react';
import cafe1 from '../cafe1.jpg';
import cafe3 from '../cafe3.jpg';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';

const Styles = styled.div`
    .jumbo {
        background: url(${cafe1}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: 1;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 0;
    }

    .lead {
        color: #ffffff;
        padding-left: 50px;
        padding-top: 5px;
    }

    .lead-h1 {
        color: #ffffff;
        padding-left: 50px;
        padding-top: 50px;
    }

`;

const Jumbotron = () => (
    <>
    <Styles>
        <div className="jumbo">
            <div className="overlay"> 
            <h1 className=" lead-h1 display-3">О нашем чудесном кофе</h1>
            <p className="lead text-light">Кафе было создана лишь для наших клиентов, чтобы ИМ было комфортно и приятно в нашем замечательном кафе</p>
            </div>
        </div>
    </Styles>

<Container style={{marginBottom: '30px', marginTop: '30px'}}>
<Row>
    <Col md={7}>
        <img src={cafe3} height={400}/>
    </Col>
    <Col md={5}>
    <h2>Что имеется у нас?</h2>
        <p style={{ wordWrap: 'break-word' }}>
        Уютное заведение, расположенное в центре города, которое предлагает своим посетителям уникальную атмосферу и разнообразное меню. Интерьер сочетает в себе современные элементы и классические детали, создавая теплую и дружелюбную обстановку.
        </p>
    </Col>
</Row>
</Container>
</>
);




export default Jumbotron;
 
