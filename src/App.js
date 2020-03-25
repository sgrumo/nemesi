import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { TopNavbar } from './components/TopNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Azienda } from './containers/Azienda';

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <Container>
        <Switch>
          <Route path="/azienda">
            <Azienda />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
