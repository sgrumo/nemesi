import React from 'react';
import { Row, Container, Card, Col } from 'react-bootstrap';
import './Contatti.css'
export const Contatti = () => {
  return (
    <Container>
      <h1 className="top-header">Contatti</h1>
      <Row>
        <Col sm={12}>
          <Card className="card-layout">
            <Card.Header as="h5">Maurizio Negroni</Card.Header>
            <Card.Body>
              <Card.Title>Technical leader</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            Per info contattare: <a href="tel:+393703242449">+39 3703242449</a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card className="card-layout">
            <Card.Header as="h5">Monica Medici</Card.Header>
            <Card.Body>
              <Card.Title>Head of Business Management</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
              Per info contattare: <a href="tel:+393387550692">+39 3387550692</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      Per info contattare alla mail: <a href="mailto:info@nemesi.biz">info@nemesi.biz</a>
    </Container>
  );
};
