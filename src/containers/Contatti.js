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
              <Card.Title>Responsabile tecnico – CAD  Manager</Card.Title>
              <Card.Text>
                Vista la pluriennale esperienza nel settore della progettazione tecnica e in quella dei sistemi informativi tecnici è leader
                tecnico per l'implementazione degli strumenti CAD, PDM/PLM, la loro personalizzazione, acquisti e formazione.
            </Card.Text>
            Per info contattare: <a href="tel:+393703242449">+39 3703242449</a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12}>
          <Card className="card-layout">
            <Card.Header as="h5">Monica Medici</Card.Header>
            <Card.Body>
              <Card.Title>Responsabile commerciale e amministrazione</Card.Title>
              <Card.Text>
                Anni di esperienza maturati prima nel settore commerciale, poi in quello amministrativo in qualità di direttore,
                si occupa dello sviluppo e l’implementazione delle strategie commerciali, gestisce la rete vendita e i contatti con il cliente.
                In ambito amministrativo supervisiona, organizza e coordina i vari servizi contabili e finanziari.
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
