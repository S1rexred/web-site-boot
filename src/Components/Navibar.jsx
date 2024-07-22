import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
      a, .navbar-brand, .navbar-nav, nav-link {
      color: #adb1b8;
      &:hover {
      color: white
      }
      }
`

export default function NaviBar() {


    const[show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


  return (
  <>
  <Styles>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
       <Container>
      <Navbar.Brand>Block WW</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
          <Nav.Link><Link to='/'>Главная</Link></Nav.Link>
          <Nav.Link><Link to='/about'>О нас</Link></Nav.Link>
          <Nav.Link><Link to='/users'>Пользователи</Link></Nav.Link>
          </Nav>
          <Nav>
            <Button variant='primary' className="mr-2" onClick={handleShow}>Войти</Button>
            <Button variant='primary' onClick={handleShow}>Регистрация</Button>
          </Nav>
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
          <Form.Group controlId='fromBasicEmail'>
              <Form.Label>Почта</Form.Label>
              <Form.control type='Ваша почта' placeholder='Введите почту'/>
              <Form.text className='text-muted'>1111</Form.text>
          </Form.Group>
          <Form.Group controlId='fromBasicPassword'>
              <Form.Label>Пароль</Form.Label>
              <Form.control type='Ваш пароль' placeholder='Введите пароль'/>
          </Form.Group>
          <Form.Group controlId='fromBasicCheckbox'>
              <Form.check type='checkbox' label='r'/>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  </>
)
}
