import React from 'react'
import { Button, Container, Nav, Navbar, Container as BootstrapContainer } from 'react-bootstrap'
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
            <Button variant='primary' className="mr-2">Войти</Button>
            <Button variant='primary'>Регистрация</Button>
          </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </Styles>
  </>
)
}
