import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');



  const submit = async (e) => {
    e.preventDefault();
    try {
      
      history.push('/activate');
    } catch (error) {
      alert('Ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
    }
  };

  
  
  return (
    <Container>
      <Form onSubmit={submit}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-4">
                  <h2 className="fw-bold text-uppercase mb-2">Регистрация</h2>
                  <p className="mb-5">Кафе Italy</p>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">Ваша почта</Form.Label>
                    <input
                      className="form-control mt-1"
                      placeholder="Почта"
                      name='email'
                      type='text'
                      value={email}
                      
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label className="text-center">Ваше имя</Form.Label>
                    <input
                      className="form-control mt-1"
                      placeholder="Имя"
                      name='username'
                      type='text'
                      value={username}
                      
                      
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-center">Ваш пароль</Form.Label>
                    <input
                      name='password'
                      type="password"
                      className="form-control mt-1"
                      placeholder="Пароль"
                      value={password}
                     
                      
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">  
                      Зарегистрироваться 
                    </Button> 
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Register;