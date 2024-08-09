import React, { useState } from 'react'
import axios from 'axios'
import { Button, Container, Nav, Navbar, Modal, Form } from 'react-bootstrap';
const Registr = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submit = async e => {
        e.preventDefault()
        const user = {
            username:username,
            password:password
        };
        await fetch('http://localhost:8000/register',{
            method: 'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify(
                {
                    username,
                    password
                }
            )
        })
        window.location.href = '/login'
        return (
            <>
        <Modal>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Обновляем состояние при вводе
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Пароль</Form.Label>
              <Form.Control type='password' 
                placeholder='Введите пароль' 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Обновляем состояние при вводе
              />
            </Form.Group>
            <Button variant='primary' style={{ marginTop: '8px' }}>
              Войти
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

        </>
        )
}
}

export default Registr