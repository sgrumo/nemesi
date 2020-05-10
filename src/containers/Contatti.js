import React from 'react';
import { Row, Form, Card, Col } from 'react-bootstrap';

export const Contatti = () => {
  return (
    <div>
      <Row className="top-header">
        <h1>Contatti</h1>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5">Maurizio Negroni</Card.Header>
            <Card.Body>
              <Card.Title>Capo assoluto</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            Per info contattare: <a href="tel:+393703242449">+39 3703242449</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header as="h5">Monica Medici</Card.Header>
            <Card.Body>
              <Card.Title>Contabile, Head of business Management</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
              Per info contattare: <a href="tel:+393387550692">+39 3387550692</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      Mail: <a href="mailto:info@nemesi.biz">info@nemesi.biz</a>
    </div>
  );
};
