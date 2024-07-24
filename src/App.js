import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';


import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import {Home} from './Home';
import {Menu} from './Menu';
import {About} from './About';


function App() {
  return (
    <>
    <Router>
    <NaviBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/about" component={About} />
    </Switch>
    </Router>
    <Footer/>
    
    </>
  )
}

export default App;
