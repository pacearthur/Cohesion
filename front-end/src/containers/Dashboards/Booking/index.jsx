import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import TotalProfitEarned from './components/TotalProfitEarned';
import TotalCustomers from './components/TotalCustomers';
import TotalBookings from './components/TotalBookings';
import BookingCancels from './components/BookingCancels';
import Reservations from './components/Reservations';
import WeeklyStat from './components/WeeklyStat';
import Occupancy from './components/Occupancy';

class BookingDashboard extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t('dashboard_booking.page_title')}</h3>
          </Col>
        </Row>
        <Row>
          <TotalProfitEarned />
          <TotalBookings />
          <TotalCustomers />
          <BookingCancels />
        </Row>
        <Row>
          <Reservations />
          <WeeklyStat />
          <Occupancy />
        </Row>
      </Container>
    );
  }
}

export default withTranslation('common')(BookingDashboard);
