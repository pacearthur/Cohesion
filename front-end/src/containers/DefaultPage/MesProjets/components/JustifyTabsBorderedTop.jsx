/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Summary from './Summary';
import Summary4 from './Summary.4';
import Summary5 from './Summary.5';
import Summary6 from './Summary.6';

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
      hit => <div key={hit.titre}> <Summary title={hit.titre} email={hit.email} nom={hit.username} description={hit.textarea} nombre={hit.nombre} start={hit.start} end={hit.end} /></div>,
    );
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Vos missions</h5>
            </div>
            <div className="tabs tabs--justify tabs--bordered-top">
              <div className="tabs__wrap">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      Vos demandes
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      Vos missions en cours
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => {
                        this.toggle('3');
                      }}
                    >
                      Vos missions terminées
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Divider />
                    <ul>
                      <Summary6 />
                    </ul>
                    <ul>
                      {this.renderTitle()}
                    </ul>
                  </TabPane>
                  <TabPane tabId="2">
                    <ul>
                      <Summary5 />
                    </ul>
                  </TabPane>
                  <TabPane tabId="3">
                    <ul>
                      <Summary4 />
                    </ul>
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
