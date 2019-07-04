import React from 'react';
import {
  Card, CardBody, Col, Table,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';

const TitleTable = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Entité</th>
              <th>Email</th>
              <th>Compétences</th>
              <th>Status</th>
            </tr>
          </thead>
        </Table>
      </CardBody>
    </Card>
  </Col>
);


export default withTranslation('common')(TitleTable);
