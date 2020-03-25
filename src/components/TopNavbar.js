import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const TopNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Nemesi</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/azienda">Azienda</Nav.Link>
                    <Nav.Link href="#pricing">Prodotti</Nav.Link>
                    <Nav.Link href="#pricing">Listini</Nav.Link>
                    <Nav.Link href="#pricing">News &amp; Eventi</Nav.Link>
                    <Nav.Link href="#pricing">Download</Nav.Link>
                    <Nav.Link href="#pricing">Contatti</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}