/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card, CardBody, Col,
} from 'reactstrap';

const Summary = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <div className="project-summary">
          <div className="card__title">
            <h5 className="bold-text">Marketing</h5>
          </div>
          <table className="project-summary__info">
            <tbody>
              <tr>
                <th>Nom de la compétence:</th>
                <td>Marketing</td>
              </tr>
              <tr>
                <th>Justificatif de la compétence:</th>
                <td>Cliquez <b>ici</b> pour télécharger la pièce justificative</td>
              </tr>
              <br />
            </tbody>
          </table>
          <div className="project-summary__stats">
            <div className="project-summary__stat">
              <p>50 <span>BADGES</span></p>
              <p>EXPERT</p>
            </div>
          </div>
          <hr />
        </div>
      </CardBody>
    </Card>
  </Col>
);

Summary.propTypes = {
};

Summary.defaultProps = {
};

export default Summary;
