import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import {Home} from './Nav-Bar/Home';
import {Menu} from './Nav-Bar/Menu';
import {About} from './Nav-Bar/About';


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
