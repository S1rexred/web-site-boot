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
        z-index: -2;
        padding-left: 50px;
        padding-top: 50px;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4); /* Полупрозрачный черный */
    }

    .container {
        position: relative; /* Позиционируем контейнер */
        z-index: 1; /* Помещаем контейнер над фоном */
    }
`;

const Jumbotron = () => (
    <>
  <Styles>
    <div className="jumbo">
      <div className=" ">
        <div className="overlay"></div> 
        <h1 className="display-3">О нашем чудесном кофе</h1>
        <p className="lead">Кафе было создана лишь для наших клиентов, чтобы ИМ было комфортно и приятно в нашем замечательном кафе</p>
      </div>
    </div>
  </Styles>

<Container style={{marginBottom: '30px', marginTop: '30px'}}>
<Row>
    <Col md={7}>
        <img src={cafe3} height={400}/>
    </Col>
    <Col md={5}>
        <p>
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </p>
    </Col>
</Row>
</Container>
</>
);




export default Jumbotron;
 
