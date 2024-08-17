import React, { useState } from 'react';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/');
  };

  const submit = async e => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    };

    try {
      const { data } = await axios.post('http://localhost:8000/token/', user, config);
      localStorage.clear();
      console.log(data.access);
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
       
      handleRedirect();
    } catch (error) {
      console.error('Ошибка при входе:', error);
      alert('Неправильный логин или пароль')
    }
  };

  return (
    <Container>
      <Form onSubmit={submit}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border-3 border-primary border"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-4">
                  <h2 className="fw-bold text-uppercase mb-2">Войти</h2>
                  <p className="mb-5">Кафе Italy</p>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">Ваша почта</Form.Label>
                    <input
                      className="form-control mt-1"
                      placeholder="Почта"
                      name='email'
                      type='text'
                      value={email}
                      required
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-center">Ваш пароль</Form.Label>
                    <input
                      className="form-control mt-1"
                      name='password'
                      placeholder="Пароль"
                      type="password"
                      value={password}
                      required
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <div className="mb-3">
                    <p className="small">
                      <a className="text-primary" href="#!">
                        Забыли пароль?
                      </a>
                    </p>
                  </div>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Войти
                    </Button>
                  </div>

                  <div className="mt-3">
                    <p className="mb-0 text-center">
                      У вас нет аккаунта?{' '}
                      <Link to="/register" className="text-primary fw-bold">
                        Зарегистрироваться
                      </Link>
                      </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;