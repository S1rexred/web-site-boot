import React from 'react'
import Slider from './Components/Slider';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import deserts1 from './deserts1.jpg';
import dreenk from './dreenk.jpg';
import hot from './hot.jpg';
import Jumbotron from './Components/Jumbotron';

export const Menu = () =>(
    <>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={deserts1} />
                        <Card.Body>
                            <Card.Title>Наши десерты</Card.Title>
                            <Card.Text>
                                Все наши десерты - уникальны! Мы сами можете в этом убедиться
                            </Card.Text>
                            <Button variant="primary">Меню</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={hot} />
                        <Card.Body>
                            <Card.Title>Горячие блюда</Card.Title>
                            <Card.Text>
                                У нас также огромный выбор горячих блюд, от супов до стейков
                            </Card.Text>
                            <Button variant="primary">Меню</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant='top' src={dreenk} />
                        <Card.Body>
                            <Card.Title>Напитка</Card.Title>
                            <Card.Text>
                                Также нельзя забывать и про напитка, у нас имеется все! От воды до элитного алкоголя!!!
                            </Card.Text>
                            <Button variant="primary">Меню</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
    </>
)