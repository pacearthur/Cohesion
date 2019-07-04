import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Visits from './components/Visits';
import TotalPageViews from './components/TotalPageViews';
import NewUsers from './components/NewUsers';
import BounceRate from './components/BounceRate';
import ABTestingAnalytics from './components/ABTestingAnalytics';

const DefaultDashboard = ({ t }) => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('Mon entité')}</h3>
      </Col>
    </Row>
    <Row>
      <Visits />
      <TotalPageViews />
      <NewUsers />
      <BounceRate />
    </Row>
    <Row>
      <ABTestingAnalytics />
    </Row>
  </Container>
);

DefaultDashboard.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(DefaultDashboard);
