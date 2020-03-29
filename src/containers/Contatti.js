import React from 'react';
import { Row, Form } from 'react-bootstrap';

export const Contatti = () => {
  return (
    <div>
      <Row className="top-header">
        <h1>Contatti</h1>
      </Row>
      <Row>
        Maurizio Negroni Telefono:{' '}
        <a href="tel:+393703242449">+39 3703242449</a>
        Monica Medici Telefono: <a href="tel:+393387550692">+39 3387550692</a>
        <a href="mailto:info@nemesi.biz">info@nemesi.biz</a>
      </Row>
      <Row>
        <Form>
          <Form.Group controlId="mail-message">
            <Form.Label>Corpo del messaggio:</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Inserire qui il messaggio da inviare"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Row>
    </div>
  );
};
