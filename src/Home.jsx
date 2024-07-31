import React from 'react'
import Slider from './Components/Slider';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import deserts1 from './deserts1.jpg';
import dreenk from './dreenk.jpg';
import hot from './hot.jpg';
import Jumbotron from './Components/Jumbotron';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export const Home = () =>(
    <>
        <Slider/>
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
    <Row>
        <Col xs={12} sm={5} md={6} lg={4}>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant='top' src={deserts1} />
                <Card.Body>
                    <Card.Title>Наши десерты</Card.Title>
                    <Card.Text>
                        Все наши десерты - уникальны! Мы сами можете в этом убедиться
                    </Card.Text>
                    <Button as={Link} to="/menu" variant="primary">Меню</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col xs={12} sm={5} md={6} lg={4} className="card-margin-hot">
            <Card className='cardhot' style={{ width: '16rem' }}>
                <Card.Img variant='top' src={hot} />
                <Card.Body>
                    <Card.Title>Горячие блюда</Card.Title>
                    <Card.Text>
                        У нас также огромный выбор горячих блюд, от супов до стейков
                    </Card.Text>
                    <Button as={Link} to="/menu" variant="primary">Меню</Button>
                </Card.Body>
            </Card>
        </Col>

                <Col xs={12} sm={5} md={6} lg={4}>
                    <Card style={{width: '16rem'}}>
                        <Card.Img variant='top' src={dreenk} />
                        <Card.Body>
                            <Card.Title>Напитка</Card.Title>
                            <Card.Text>
                                Также нельзя забывать и про напитка, у нас имеется все! От воды до элитного алкоголя!!!
                            </Card.Text>
                            <Button as={Link} to="/menu" variant="primary">Меню</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        <Jumbotron/>
    </>
)