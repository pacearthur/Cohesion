import React from 'react';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ResponsiveTable = ({
  Nom,
  Prénom,
  Entité,
  Email,
  Compétences,
  Status,
}) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <Table responsive className="table--bordered">
          <tbody>
            <tr>
              <th>{ Nom }</th>
              <td>{ Prénom }</td>
              <td>{ Entité }</td>
              <td>{ Email }</td>
              <td>{ Compétences }</td>
              <td><Badge color="success">{ Status }</Badge></td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

ResponsiveTable.propTypes = {
  Nom: PropTypes.func.isRequired,
  Prénom: PropTypes.func.isRequired,
  Entité: PropTypes.func.isRequired,
  Email: PropTypes.func.isRequired,
  Compétences: PropTypes.func.isRequired,
  Status: PropTypes.func.isRequired,
};

export default withTranslation('common')(ResponsiveTable);
