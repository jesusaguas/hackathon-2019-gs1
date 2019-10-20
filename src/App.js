import React from 'react';
import logo from './GreenBowl.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import {connect} from 'react-redux';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Green Bowl'}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;