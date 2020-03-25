import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { TopNavbar } from './components/TopNavbar';
import { Azienda } from './containers/Azienda';
import { Prodotti } from './containers/Prodotti';
import { Download } from './containers/Download';
import { Listino } from './containers/Listino';
import { NewsAndEvents } from './containers/NewsAndEvents';
import { Contatti } from './containers/Contatti';
import { Home } from './containers/Home';

const App = () => {
  return (
    <Router>
      <TopNavbar />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/azienda">
            <Azienda />
          </Route>
          <Route path="/prodotti">
            <Prodotti />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
          <Route path="/listino">
            <Listino />
          </Route>
          <Route path="/newsandevents">
            <NewsAndEvents />
          </Route>
          <Route path="/contatti">
            <Contatti />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
