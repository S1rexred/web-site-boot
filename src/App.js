import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';
   

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';


function App() {
  return (
    <>
    <Router>
    <NaviBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Пользователи" component={Users} />
      <Route path="/О нас" component={About} />
    </Switch>
    </Router>
    </>
  )
}

export default App;
