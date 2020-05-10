import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './TopNavbar.css';

export const TopNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">Nemesi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="/azienda">Azienda</Nav.Link>
          <Nav.Link href="/prodotti">Prodotti</Nav.Link>
          <Nav.Link href="/listino">Listino</Nav.Link>
          <Nav.Link href="/newsandevents">News &amp; Eventi</Nav.Link>
          <Nav.Link href="/download">Download</Nav.Link> */}
          <Nav.Link href="/contatti">Contatti</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
