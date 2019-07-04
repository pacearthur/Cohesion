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
            <h5 className="bold-text">Campagne de prévention</h5>
          </div>
          <table className="project-summary__info">
            <tbody>
              <tr>
                <th>Description:</th>
                <td>L'objectif de cette mission est de réaliser des visuels pour une campagne de prévention en interne</td>
              </tr>
              <tr>
                <th>Titre de la mission:</th>
                <td>Campagne de prévention</td>
              </tr>
              <tr>
                <th>Nom du demandeur:</th>
                <td>Delatte</td>
              </tr>
              <tr>
                <th>E-mail du demandeur:</th>
                <td>delphine.delatte@intradef.gouv.fr</td>
              </tr>
              <tr>
                <th>Statut:</th>
                <td>En cours</td>
              </tr>
              <br />
            </tbody>
          </table>
          <div className="project-summary__stats">
            {/* <div className="project-summary__stat">
              <p>6 <span>Tâches</span></p>
            </div> */}
            <div className="project-summary__stat">
              <p>MISSION EN COURS</p>
            </div>
            <div>
              <Button outline size="sm"><a href="/todo">Plus de détails...</a></Button>
            </div>
          </div>
          {/* <Statistics /> */}
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
