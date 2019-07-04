/* eslint-disable import/order */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import showResults from '../Show2';
import HorizontalForm2 from '../HorizontalForm.1';
import {
  Card, CardBody, Col,
} from 'reactstrap';

const Summary = ({
  title, nom, email, description, nombre,
}) => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <div className="project-summary">
          <div className="card__title">
            <h5 className="bold-text">{ title }</h5>
          </div>
          <table className="project-summary__info">
            <tbody>
              <tr>
                <th>Description:</th>
                <td>{ description }</td>
              </tr>
              <tr>
                <th>Titre de la mission:</th>
                <td>{ title }</td>
              </tr>
              <tr>
                <th>Nom du demandeur:</th>
                <td>{ nom }</td>
              </tr>
              <tr>
                <th>E-mail du demandeur:</th>
                <td>{ email }</td>
              </tr>
              <tr>
                <th>Statut:</th>
                <td>En attente d&apos;un expert</td>
              </tr>
              <br />
            </tbody>
          </table>
          <div className="project-summary__stats">
            {/* <div className="project-summary__stat">
              <p>6 <span>Tâches</span></p>
            </div> */}
            <div className="project-summary__stat">
              <p>{ nombre } <span>Expert(s) demandé(s)</span></p>
            </div>
          </div>
          <Statistics />
          <div>
            <HorizontalForm2 onSubmit={showResults} />
          </div>
        </div>
      </CardBody>
      <Divider />
    </Card>
  </Col>
);

Summary.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Summary.defaultProps = {
  title: 'null',
  description: 'null',
};

export default Summary;
