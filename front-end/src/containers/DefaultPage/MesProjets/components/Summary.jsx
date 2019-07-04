/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';

const Summary = ({
  title, nom, email, description, nombre, start, end,
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
                <th>Début du projet:</th>
                <td>{ start }</td>
              </tr>
              <tr>
                <th>Fin du projet:</th>
                <td>{ end }</td>
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
          {/* <Statistics /> */}
          <div className="project-summary__progress progress-wrap progress-wrap">
            <Button outline size="sm"><a href="/tables/table_expert">Trouver un expert...</a></Button>
          </div>
          <div>
            <Button outline size="sm"><a href="/todo">Plus de détails...</a></Button>
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
