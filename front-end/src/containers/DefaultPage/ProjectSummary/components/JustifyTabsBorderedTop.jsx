/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, Col, TabContent, TabPane,
} from 'reactstrap';
import Divider from '@material-ui/core/Divider';
import Summary from './Summary';
import Summary1 from './Summary.1';

const API = 'http://localhost:8919/api/cohesion.mission.Mission';

class JustifyTabsBorderedTop extends PureComponent {
  constructor() {
    super();
    this.state = {
      activeTab: '1',
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  toggle = (tab) => {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  renderTitle() {
    const { hits } = this.state;
    return hits.map(
      hit => <div key={hit.titre}> <Summary title={hit.titre} email={hit.email} nom={hit.username} description={hit.textarea} nombre={hit.nombre} competence={hit.competences} /></div>,
    );
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Les missions qui pourraient vous intérésser</h5>
            </div>
            <div className="tabs tabs--justify tabs--bordered-top">
              <div className="tabs__wrap">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Divider />
                    <ul>
                      {this.renderTitle()}
                    </ul>
                    <ul>
                      <Summary1 />
                    </ul>
                  </TabPane>
                  <TabPane tabId="3">
                    <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                      use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
                    </p>
                  </TabPane>
                  <TabPane tabId="4">
                    <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                      use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article
                      concern joy anxious did picture sir her.
                    </p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return { hits: state.hits };
}

export default connect(mapStateToProps)(JustifyTabsBorderedTop);
