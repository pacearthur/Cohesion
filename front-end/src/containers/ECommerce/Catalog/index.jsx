import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CatalogItems from './components/CatalogItems';

const Catalog = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Place de compétences</h3>
        <h3 className="page-subhead subhead"> Retrouvez ici toutes les compétences disponibles.
        </h3>
      </Col>
    </Row>
    <Row>
      <CatalogItems />
    </Row>
  </Container>
);

export default Catalog;
