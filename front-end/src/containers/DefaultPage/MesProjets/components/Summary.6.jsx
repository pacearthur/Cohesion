/* eslint-disable import/order */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Divider from '@material-ui/core/Divider';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';

const Summary = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <div className="project-summary">
          <div className="card__title">
            <h5 className="bold-text">Chatbot de recommandation</h5>
          </div>
          <table className="project-summary__info">
            <tbody>
              <tr>
                <th>Description:</th>
                <td>L'objectif de cette mission est de réaliser un chatbot</td>
              </tr>
              <tr>
                <th>Titre de la mission:</th>
                <td>Chatbot de recommandation</td>
              </tr>
              <tr>
                <th>Nom du demandeur:</th>
                <td>Degêne</td>
              </tr>
              <tr>
                <th>E-mail du demandeur:</th>
                <td>clemence.degene@intradef.gouv.fr</td>
              </tr>
              <tr>
                <th>Statut:</th>
                <td>En cours</td>
              </tr>
              <br />
            </tbody>
          </table>
          <div className="project-summary__stats">
            <div className="project-summary__stat">
              <p>2 <span>Expert(s) demandé(s)</span></p>
            </div>
          </div>
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

Summary.defaultProps = {
  title: 'null',
  description: 'null',
};

export default Summary;
