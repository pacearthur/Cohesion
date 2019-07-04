/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Divider from '@material-ui/core/Divider';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import HorizontalForm2 from '../../../Form/BasicForm/components/HorizontalForm.1';
import showResults from '../Show2';

const Summary = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <div className="project-summary">
          <div className="card__title">
            <h5 className="bold-text">Etude de marché</h5>
          </div>
          <table className="project-summary__info">
            <tbody>
              <tr>
                <th>Description:</th>
                <td>Réflexion et réalisation d'une étude de marché.</td>
              </tr>
              <tr>
                <th>Titre de la mission:</th>
                <td>Etude de marché</td>
              </tr>
              <tr>
                <th>Nom du demandeur:</th>
                <td>Duit</td>
              </tr>
              <tr>
                <th>E-mail du demandeur:</th>
                <td>damien.duit@intradef.gouv.fr</td>
              </tr>
              <tr>
                <th>Statut:</th>
                <td>Terminée</td>
              </tr>
              <br />
            </tbody>
          </table>
          <div className="project-summary__stats">
            {/* <div className="project-summary__stat">
              <p>6 <span>Tâches</span></p>
            </div> */}
            <div className="project-summary__stat">
              <p>MISSION TERMINEE</p>
            </div>
            <HorizontalForm2 onSubmit={showResults} />
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
