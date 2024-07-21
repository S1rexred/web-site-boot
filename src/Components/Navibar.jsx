import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom';
export default function NaviBar() {
  return (
  <>
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'> 
      <Navbar.Brand>Block WW</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Пользователи</Nav.Link>
          </Nav>
          <Nav>
            <Button variant='primary' className="mr-2">Войти</Button>
            <Button variant='primary'>Регистрация</Button>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  </>
)
}
