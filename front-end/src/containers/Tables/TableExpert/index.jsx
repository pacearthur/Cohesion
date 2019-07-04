import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ListOfExperts from './components/ListOfExperts';

const TableExpert = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('Experts disponibles')}</h3>
      </Col>
    </Row>
    <Row>
      <ListOfExperts />
    </Row>
  </Container>
);

TableExpert.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(TableExpert);
