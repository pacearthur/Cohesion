/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';

const API = 'http://localhost:8919/api/cohesion.participant.cohesionAgent';

class ListOfExperts extends PureComponent {
  constructor() {
    super();
    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  renderTitle() {
    const { hits } = this.state;
    return hits.map(
      (hit => (
        <div key={hit.email}>
          <Card>
            <CardBody>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Entité</th>
                    <th>E-mail</th>
                    <th>Compétences</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{hit.nom}</td>
                    <td>{hit.prenom}</td>
                    <td>{hit.entite}</td>
                    <td>{hit.email}</td>
                    <td>{hit.competences}</td>
                    <td><Badge color="success">{hit.status}</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </div>
      )
      ),
    );
  }

  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            {this.renderTitle()}
          </CardBody>
        </Card>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return { hits: state.hits };
}

export default connect(mapStateToProps)(ListOfExperts);
