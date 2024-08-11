import React,{useState} from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Register = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  const history = useHistory();

  const handleRedirect = () => {
    history.push('/');
  };

  const submit = async e =>{
    e.preventDefault()

    await fetch('http://localhost:8000/register/',{
      method:'POST',
      headers:{'Content-Type':"application/json"},
      body: JSON.stringify(
        {
          email,
          username,
          password
        }
      )
    });
    window.location.href='/login'
  
  }

  return (
    
    <Container>
      <Form onSubmit={submit} >
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border-3 border-primary border"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2 className="fw-bold text-uppercase mb-2">Регистрация</h2>
                <p className="mb-5">Кафе Italy</p>
                
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">Ваша почта</Form.Label>
                    <input className="form-control mt-1" 
                        placeholder="Почта" 
                        name='email'  
                        type='text' value={email}
                        required 
                        onChange={e => setEmail(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-center">Ваше имя</Form.Label>
                    <input className="form-control mt-1" 
                        placeholder="Имя" 
                        name='username'  
                        type='text' value={username}
                        required 
                        onChange={e => setUsername(e.target.value)}/>
                  </Form.Group>
                  <Form.Label className="text-center">Ваш пароль</Form.Label>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <input name='password' 
                        type="password"     
                        className="form-control mt-1"
                        placeholder="Пароль"
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)}/>
                  </Form.Group>
                  <div className="mb-3">
                    <p className="small">
                     
                    </p>
                  </div>
                  <div className="d-grid">
                    <Button onClick={handleRedirect} variant="primary" type="submit"> 
                      Зарегистрироваться
                    </Button>
                  </div>
               
                <div className="mt-3">
                  <p className="mb-0 text-center">
                    Уже есть аккаунт?{' '}
                    <Link to="/login" className="text-primary fw-bold">
                        Войти
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
  )
}

export default Register