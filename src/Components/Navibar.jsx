import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  nav-link {
    color: #adb1b8;
    &:hover {
      color: white;
    }
  }
`;


const NaviBar = () => {
  const [show, setShow] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [loginEmail, setLoginEmail] = useState(''); // Состояние для хранения почты при входе
  const [loginPassword, setLoginPassword] = useState(''); // Состояние для хранения пароля при входе
  const [registerEmail, setRegisterEmail] = useState(''); // Состояние для хранения почты при регистрации
  const [registerPassword, setRegisterPassword] = useState(''); // Состояние для хранения пароля при регистрации

  const handleClose = () => setShow(false);
  const handleCloseSign = () => setShowSign(false);

  const handleLogin = () => {
    
    setUserEmail(loginEmail); // Устанавливаем почту пользователя из формы
    handleClose(); // Закрываем модальное окно
  };

  const handleRegister = () => {
    
    setUserEmail(registerEmail); // Устанавливаем почту пользователя из формы
    handleCloseSign(); // Закрываем модальное окно
  };

  const [showBron, setShowBron] = useState(false);

  const handleCloseBron = () => setShowBron(false);
  const handleShowBron = () => setShowBron(true);

  return (
    <>
    <Styles>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
  <Container>
    <Navbar.Brand>Block WW</Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse className='responsive-navbar-nav'>
      <Nav className='me-auto'>
        <Nav.Link style={{ textDecoration: 'none' }}>
          <Link to='/'>Главная</Link>
        </Nav.Link>
        <Nav.Link style={{ textDecoration: 'none' }}>
          <Link to='/about'>О нас</Link>
        </Nav.Link>
        <Nav.Link style={{ textDecoration: 'none' }}>
          <Link to='/menu'>Меню</Link>
        </Nav.Link>
      </Nav>
      <div className="bron-button-container">  {/* Новый блок для кнопки бронирования */}
        <Button onClick={() => handleShowBron(true)} className='button-bron' variant='primary'>Забронировать столик</Button>
      </div>
      {userEmail ? (
        <div>
          <p style={{ color: 'white' }}>{userEmail}</p>
          <Button variant="secondary" onClick={() => setUserEmail(null)}>
            Выйти
          </Button>
        </div>
      ) : (
        <div className="auth-buttons"> {/* Новый блок для кнопок входа и регистрации */}
          <Button style={{ marginRight: '5px' }} variant="primary" onClick={() => setShow(true)}>
            Войти
          </Button>
          <Button variant="secondary" onClick={() => setShowSign(true)}>
            Регистрация
          </Button>
        </div>
      )}
    </Navbar.Collapse>
  </Container>
</Navbar>
      </Styles>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вход</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Почта</Form.Label>
              <Form.Control 
                type='email' 
                placeholder='Введите почту' 
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)} // Обновляем состояние при вводе
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Пароль</Form.Label>
              <Form.Control type='password' 
                placeholder='Введите пароль' 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)} // Обновляем состояние при вводе
              />
            </Form.Group>
            <Button variant='primary' style={{ marginTop: '8px' }} onClick={handleLogin}>
              Войти
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSign} onHide={handleCloseSign}>
        <Modal.Header closeButton>
          <Modal.Title>Регистрация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicName'>
              <Form.Label>Имя</Form.Label>
              <Form.Control type='text' placeholder='Введите ваше имя' />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Почта</Form.Label>
              <Form.Control 
                type='email' 
                placeholder='Введите почту' 
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)} // Обновляем состояние при вводе
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Пароль</Form.Label>
              <Form.Control 
                type='password' 
                placeholder='Введите пароль' 
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)} // Обновляем состояние при вводе
              />
            </Form.Group>
            <Button variant='primary' style={{ marginTop: '8px' }} onClick={handleRegister}>
              Зарегистрироваться
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showBron} onHide={handleCloseBron}>
      <Modal.Header closeButton>
      <Modal.Title>Бронирование столика</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='fromBasicEmail'>
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control type='Ваше имя' placeholder='Введите имя'/>
          </Form.Group>
          <Form.Group controlId='fromBasicPassword'>
              <Form.Label>Ваш телефон</Form.Label>
              <Form.Control type='Ваш телефон' placeholder='Введите номер телефона'/>
          </Form.Group>
          <Form.Group controlId='fromBasicCheckbox'>
          </Form.Group>
          <Button variant='primary' style={{ marginTop: '8px' }} onClick={handleRegister}>
              Отправить
            </Button>
        </Form>
      </Modal.Body>
    </Modal>

    </>
  );
};

export default NaviBar;